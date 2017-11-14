# Validation

This guide briefly explains how Mimi PAGE results were validated against PAGE 2009 outputs.

Validations were performed for both the deterministic and probabilistic versions of the model. For the deterministic version of the model, both individual components and final outputs were validated. For the probabilistic version of the model, final outputs were validated.

## PAGE 2009 Data

Both the deterministic and Monte Carlo model are benchmarked against outputs from Excel version PAGE 2009 (Chris Hope, personal communication, 2016). Data from the deterministic model are saved in **test/validationdata**.

Running the Excel version of PAGE 2009 requires downloading the @RISK 7.5 Industial software, which facilitates probabilistic modeling in Excel. In order to perform tests of individual components, intermediate model output were extracted from PAGE 09. Values were exported with full precision using a custom function. (Truncating precision can lead to compounding errors which will cause Mimi PAGE results to diverge from PAGE 2009.)

## Deterministic validations

For each individual Mimi PAGE component, we tested the component with known input data and compared output with values from PAGE 2009. Nearly all values matched within 1%.

As an example of how a test file works, consider test_CO2emissions, in the **test** folder. This script serves as a test for the src/CO2emissions.jl file.

In test_CO2emissions, we first initialize the model and include the relevant files (load_paramaters.jl and CO2emissions.jl). Then we add the CO2emissions component to our model m.

```
using Mimi
using Base.Test

include("../src/load_parameters.jl")
include("../src/CO2emissions.jl")

m = Model()
setindex(m, :time, [2009, 2010, 2020, 2030, 2040, 2050, 2075, 2100, 2150, 2200])
setindex(m, :region, ["EU", "USA", "OECD","USSR","China","SEAsia","Africa","LatAmerica"])

addcomponent(m, co2emissions)
```

Then we set the parameters (baseline emissions and CO2 emissions growth) using exogenous values from PAGE 2009 written documentation, which are saved in the scr/data folder.
```
setparameter(m, :co2emissions, :e0_baselineCO2emissions, readpagedata(m,"data/e0_baselineCO2emissions.csv"))
setparameter(m, :co2emissions, :er_CO2emissionsgrowth, readpagedata(m, "data/er_CO2emissionsgrowth.csv"))
```

Then we run our model, saving the output to "emissions." We load exogenous PAGE 2009 data on emisions derived from the Excel version and save this to emissions_compare. Finally, we test to see if the output from our model matches that from PAGE within 1e-3 precision (it does).
```
##running Model
run(m)

emissions= m[:co2emissions,  :e_regionalCO2emissions]

# Recorded data
emissions_compare=readpagedata(m, "test/validationdata/e_regionalCO2emissions.csv")

@test_approx_eq_eps emissions emissions_compare 1e-3

```
The graph below shows the output from both PAGE 2009 and PAGE MIMI, which match within 0.001 GtCO2e.

![CO2graph](assets/co2graph.png)



## Probabilistic validation

The probabilistic version of PAGE randomizes uncertain values within the model. Using Monte Carlo simulations with 100,000 model runs, we graphed and compared distributions of total damages, total preventative costs, total adaptation costs, and total effects between the probalistic versions of PAGE 2009 and MIMI PAGE.

Values for PAGE 09 were generated using Microsoft Excel and Palisade @RISK 7.5 Industrial software.

Values for the PAGE MIMI Monte Carlo run were generated using a script, **src/montecarlo.jl**. For each run, uncertain model parameters were randomly assigned values from a triangular distribution that is defined within an individual component. For example, the Monte Carlo script calls randomizeCO2cycle(m), a function of the src/CO2cycle component:

```
function randomizeCO2cycle(model::Model)
    update_external_parameter(model, :air_CO2fractioninatm, rand(TriangularDist(57, 67, 62)))
    update_external_parameter(model, :res_CO2atmlifetime, rand(TriangularDist(50, 100, 70)))
    update_external_parameter(model, :ccf_CO2feedback, rand(TriangularDist(4, 15, 10)))
    update_external_parameter(model, :ccfmax_maxCO2feedback, rand(TriangularDist(30, 80, 50)))
    update_external_parameter(model, :stay_fractionCO2emissionsinatm, rand(TriangularDist(0.25,0.35,0.3)))
end
```

In this function, five parameters related to the CO2 cycle are assigned semi-random values. For example, the CO2 fraction in the atmosphere is randomly drawn from a triangular distribution centered on 62, extending from 57 to 67. (Per PAGE09, all distributions are triangular.)

In each of the 100,000 model runs, dozens of values are randomly assigned across the model, the model is run, and key outputs from the model run are saved. This generates a distribution of model outputs.

The graphs below shows total abatement costs as one example of an output. Dotted lines indicate the 10% and 90% quantiles.

Total abatement costs, PAGE Mimi
![abatement_MIMI](assets/abatement_mimi.png)

Total abatement costs, PAGE 09
![abatement_PAGE09](assets/abatement_page09.png)

Distributions matched closely between the Excel and MIMI versions (<1.5% difference) for all outputs, based on 100,000 runs.

![outputs](assets/probabilistic.png)


(Positive values indicate higher results from PAGE MIMI compared to PAGE09)

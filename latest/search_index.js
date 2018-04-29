var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Mimi-PAGE.jl-1",
    "page": "Home",
    "title": "Mimi-PAGE.jl",
    "category": "section",
    "text": ""
},

{
    "location": "index.html#Overview-1",
    "page": "Home",
    "title": "Overview",
    "category": "section",
    "text": "Mimi-PAGE implements the PAGE integrated assessment model using the Mimi component framework. For more information, see the Getting Started page."
},

{
    "location": "gettingstarted.html#",
    "page": "Getting started",
    "title": "Getting started",
    "category": "page",
    "text": ""
},

{
    "location": "gettingstarted.html#Getting-Started-1",
    "page": "Getting started",
    "title": "Getting Started",
    "category": "section",
    "text": "This guide will briefly explain how to install Julia and Mimi-PAGE."
},

{
    "location": "gettingstarted.html#Installing-Julia-1",
    "page": "Getting started",
    "title": "Installing Julia",
    "category": "section",
    "text": "Mimi-PAGE requires the programming language Julia, version 0.5 or later, to run. Download and install the current release from the Julia download page."
},

{
    "location": "gettingstarted.html#Julia-Editor-Support-1",
    "page": "Getting started",
    "title": "Julia Editor Support",
    "category": "section",
    "text": "There are various editors around that have Julia support:IJulia adds Julia support to the jupyter (formerly IPython) notebook system.\nJuno adds Julia specific features to the Atom editor.\nSublime, VS Code, Emacs and many other editors all have Julia extensions that add various levels of support for the Julia language."
},

{
    "location": "gettingstarted.html#Installing-Mimi-1",
    "page": "Getting started",
    "title": "Installing Mimi",
    "category": "section",
    "text": "The Mimi-PAGE model is written for the Mimi modeling framework, which needs to be installed as a standard Julia package. Once Julia is installed, start Julia and you should see a Julia command prompt. To install the Mimi package, issue the following command:julia> Pkg.add(\"Mimi\")You only have to run this command once on your machine.Mimi-PAGE also requires the Distributions, DataFrames, and Missings packages.For more information about the Mimi component framework, you can refer to the Mimi Github repository, which has a documentation and links to various models that are based on Mimi."
},

{
    "location": "gettingstarted.html#Installing-Mimi-PAGE-1",
    "page": "Getting started",
    "title": "Installing Mimi-PAGE",
    "category": "section",
    "text": "Clone or download the Mimi-PAGE repository from the Mimi-PAGE Github website."
},

{
    "location": "gettingstarted.html#Using-Mimi-PAGE-1",
    "page": "Getting started",
    "title": "Using Mimi-PAGE",
    "category": "section",
    "text": "To run the model, run the main_model.jl file in the src folder. This runs the deterministic version of Mimi-PAGE with central parameter estimates. The getpage function used in that file create the initialized PAGE model. You can print the model, by typing m, which returns a list of components and each of their incoming parameters and outgoing variables. Results can be viewed by running m[:ComponentName, :VariableName] for the desired component and variable.To run the stochastic version of Mimi-PAGE, which uses parameter distributions, see the montecarlo.jl file in the src folder. The current Monte Carlo process outputs a selection of variables that are important for validation, but these can be modified by the user if desired. The user can also set the number of Monte Carlo runs in montecarlo.jl. For more information, see the Technical Guide."
},

{
    "location": "gettingstarted.html#Troubleshooting-1",
    "page": "Getting started",
    "title": "Troubleshooting",
    "category": "section",
    "text": "To troubleshoot individual components, you can refer to the test directory, which has separate files that check each component.For specific questions, you can send an email to David Anthoff (<anthoff@berkeley.edu>)."
},

{
    "location": "model-structure.html#",
    "page": "Model Structure",
    "title": "Model Structure",
    "category": "page",
    "text": ""
},

{
    "location": "model-structure.html#Model-Structure-1",
    "page": "Model Structure",
    "title": "Model Structure",
    "category": "section",
    "text": ""
},

{
    "location": "model-structure.html#Overview-1",
    "page": "Model Structure",
    "title": "Overview",
    "category": "section",
    "text": "Mimi-PAGE is constructed to reproduce the PAGE09 model structure, which features ten time periods and eight world regions. These time periods and regions are explicitly listed below. Climate change impacts for four sectors are calculated in addition to the costs of mitigation– herein referred to as abatement policies– and the costs of adaptation. Both impacts and costs can be computed under parameter uncertainty.This iteration of PAGE subsets the model into twenty-seven components, elaborated under the \"Components\" section below, and two basic parts: climate and economy. There are also a number of components particular to Mimi-PAGE which assist with certain functionalities. Within the climate model, gases and sulphates are split into three components each– namely the \"Cycle\", \"Emissions\", and \"Forcing\" components for that gas. Forcings are then aggregated into \"Total Forcing\" and feed into \"Climate Temperature\". The economic model includes \"Abatement Costs\", \"Adaptation Costs\", and \"Discontinuous\" impacts as well as impacts from \"Sea Level Rise\", \"Market Damages\", and \"Non-Market Damages\". It also features an \"Equity Weighting\" component.A schematic of the model, and full listing of components, follows below."
},

{
    "location": "model-structure.html#Time-periods-and-regions-1",
    "page": "Model Structure",
    "title": "Time periods and regions",
    "category": "section",
    "text": "The ten uneven timesteps employed in Mimi-PAGE are 2009, 2010, 2020, 2030, 2040, 2050, 2075, 2100, 2150, 2200. The baseline period used, prior to any modeled results, is 2008.The eight regions included are Europe (EU), the United States (US or USA), other countries in the Organisation for Economic Co-operation and Development (OT or OECD), the former Union of Soviet Socialist Republics and the rest of Europe (EE or USSR), China and centrally planned Asia (CA or China), India and Southeast Asia (IA or SEAsia), Africa and the Middle East (AF or Africa), and Latin America (LA or LatAmerica).  These parenthetical labels are used throughout the data files and in the model specification.  Mimi-PAGE, like PAGE09, employs the EU as a baseline region, with some processes calculated relative to their EU values."
},

{
    "location": "model-structure.html#Sectors-and-gases-1",
    "page": "Model Structure",
    "title": "Sectors and gases",
    "category": "section",
    "text": "The model is divided into four impact sectors: sea level rise, market damages (called \"economic damages\" in PAGE09), non-market damages (called \"non-economic\" in PAGE09), and discontinuities. The six greenhouse gases of the Kyoto Protocol are each included via components that respectively model CO2, CH4, N2O, and a subset of low-concentration gases collectively termed \"linear gases.\" Linear gases include HFCs, PFCs, and SF6. Sulphate forcing is also modelled.The four impact sectors in Mimi-PAGE are modelled independently and reflect damages as a proportion of GDP. Sea level rise is a lagged linear function of global mean temperature. Both market and non-market impacts are designed to reflect the particular vulnerabilities of different regions, and use a polynomial function to reflect temperature impacts over time. Discontinuity, or the risk of climate change triggering large-scale damages, reflects a variety of different possible types of disaster."
},

{
    "location": "model-structure.html#Components-1",
    "page": "Model Structure",
    "title": "Components",
    "category": "section",
    "text": ""
},

{
    "location": "model-structure.html#Climate-Model-1",
    "page": "Model Structure",
    "title": "Climate Model",
    "category": "section",
    "text": "The components in this portion of Mimi-PAGE include:CH4 Cycle\nCH4 Emissions\nCH4 Forcing\nCO2 Cycle\nCO2 Emissions\nCO2 Forcing\nN2O Cycle\nN2O Emissions\nN2O Forcing\nLinear Gases (hereafter \"LG\") Cycle\nLG Emissions\nLG Forcing\nSulphate Forcing\nTotal Forcing\nClimate Temperature\nSea Level Rise"
},

{
    "location": "model-structure.html#Economic-Model-1",
    "page": "Model Structure",
    "title": "Economic Model",
    "category": "section",
    "text": "The components in this portion of Mimi-PAGE include:Population\nGDP\nMarket Damages\nNon-Market Damages\nSea Level Rise Damages\nDiscontinuity\nAbatement Costs (for each gas)\nAdaptation Costs (for each impact sector)\nTotal Abatement Costs\nTotal Adaptation Costs\nEquity Weighting"
},

{
    "location": "model-structure.html#Functional-Components-of-Mimi-PAGE-1",
    "page": "Model Structure",
    "title": "Functional Components of Mimi-PAGE",
    "category": "section",
    "text": "The following scripts assist in the actual running of Mimi-Page, and are further elaborated in the technical user guide.getpagefunction.jl\nload_parameters.jl\nmain_model.jl\nmctools.jl\nmontecarlo.jl"
},

{
    "location": "model-structure.html#Schematic-1",
    "page": "Model Structure",
    "title": "Schematic",
    "category": "section",
    "text": "(Image: page-image)"
},

{
    "location": "technicaluserguide.html#",
    "page": "Technical User Guide",
    "title": "Technical User Guide",
    "category": "page",
    "text": ""
},

{
    "location": "technicaluserguide.html#Technical-User-Guide-1",
    "page": "Technical User Guide",
    "title": "Technical User Guide",
    "category": "section",
    "text": ""
},

{
    "location": "technicaluserguide.html#Folder-Structure-1",
    "page": "Technical User Guide",
    "title": "Folder Structure",
    "category": "section",
    "text": "The folders are organized as follows.srcHere you will find the model components, i.e. the code.dataHere you will find data that are utilized by the components. This includes initial values, input parameters, and socioeconomic scenarios. The data we used to calibrate our model comes from the PAGE09 Excel version, generously provided by Chris Hope.docsThe documentation is stored here, including the the index, getting started, scientific guide, and this file.testThis folder contains files that were and still can be used to make sure a component is fully functional. The tests run each individual component separately so you can diagnose which might not be working and why. (They should all work). The tests take inputs, normally provided by other components, and produce outputs that often would otherwise go to other compontents.  Both are stored in test/validationdata. There is also test for the entire model in \"test_mainmodel.jl\"data/policy-b and test/validationdata/policy-bPAGE \'09 provides a low emissions policy scenario.  The input data for that scenario is provided in data/policy-b and validation data in test/validationdata/policy-b.  See test/test_mainmodel_policyb/jl for an example of its usage.  The code is designed so that other policies can be added in the same fashion."
},

{
    "location": "technicaluserguide.html#Code-format-1",
    "page": "Technical User Guide",
    "title": "Code format",
    "category": "section",
    "text": "The code is written in Julia (v0.5 or greater).\nThe data are in CSV format for easy portability and manipulation.\nThe docs are in Markdown format for readability on github.Each component in the model (and the test files as well) has the same basic mimi structure.Here we show the code for the CO2 Forcing component to provide an example of the mimi structure with comments.# Imports the Mimi package. This is only done with certain components,\n# because once it is loaded in the model, it becomes redundant code.\nusing MimiNow we will define the component with its parameters (inputs) and variables (outputs).@defcomp co2forcing begin # this defines the component, gives it a name, and starts the code chunk\n    # The value of parameters are specified elsewhere in the code,\n	# either as a external value or the output of a variable in another component\n\n    c_CO2concentration = Parameter(index=[time],unit=\"ppbv\") # Sets a parameter which is indexed by time.\n    f0_CO2baseforcing = Parameter(unit=\"W/m2\")\n    fslope_CO2forcingslope = Parameter(unit=\"W/m2\")\n    c0_baseCO2conc = Parameter(unit=\"ppbv\")\n	\n    f_CO2forcing = Variable(index=[time],unit=\"W/m2\") # defines a variable that will be evaluated in the component\nendNext we will create the function that carries the components equations. These equations utilize the parameters and variables defined above.function run_timestep(s::co2forcing, t::Int64)\n    v = s.Variables\n    p = s.Parameters\n\n    # Eq.13 in Hope 2006\n    v.f_CO2forcing[t] = p.f0_CO2baseforcing + p.fslope_CO2forcingslope*log(p.c_CO2concentration[t]/p.c0_baseCO2conc)\nendLastly, we define a function that is used to add the component to the main model. Here we can also set exogenous parameters.function addCO2forcing(model::Model)\n    co2forcingcomp = addcomponent(model, co2forcing)\n\n    co2forcingcomp[:fslope_CO2forcingslope] = 5.5\n    co2forcingcomp[:f0_CO2baseforcing] = 1.735\n    co2forcingcomp[:c0_baseCO2conc] = 395000.\n\n    co2forcingcomp\nendIn the getpagefunction.jl file, you will find code that sends variables between components. For example,CO2forcing[:c_CO2concentration] = CO2cycle[:c_CO2concentration] # incoming = outgoing.\n# In this case, the `c_CO2concentration` is constructed in the `CO2cycle` component\n# and then sent to the `CO2forcing` component.Once the model has run, you can access variable outputs with this syntax (note, that the model is referred to as m):m[:co2forcing, :f_CO2forcing]"
},

{
    "location": "validation.html#",
    "page": "Model Validation",
    "title": "Model Validation",
    "category": "page",
    "text": ""
},

{
    "location": "validation.html#Validation-1",
    "page": "Model Validation",
    "title": "Validation",
    "category": "section",
    "text": "This guide briefly explains how Mimi PAGE results were validated against PAGE 2009 outputs.Validations were performed for both the deterministic and probabilistic versions of the model. For the deterministic version of the model, both individual components and final outputs were validated. For the probabilistic version of the model, final outputs were validated."
},

{
    "location": "validation.html#Folder-Structure-1",
    "page": "Model Validation",
    "title": "Folder Structure",
    "category": "section",
    "text": "Relevant tests and data are saved in the \'test\' folder. The folders are organized as follows.testContains seperate unit tests for the deterministic version of each of the individual model components.test/validationdataWe obtained PAGE 2009 values from the Excel version of PAGE 2009, provided by Chris Hope (personal communication).Running the Excel version of PAGE 2009 requires the @RISK 7.5 Industial software (available at http://go.palisade.com/RISKDownload.html), which facilitates probabilistic modeling in Excel. Free 15-day trials of the software are avaiable.In order to perform tests of individual components, known values were extracted from PAGE \'09 or the PAGE written documentation. Where they were obtained from PAGE 2009, values were exported with full precision using a separate extraction tool. (Key values are saved in the validationdata folder within the test folder.) Truncating precision can lead to compounding errors which will cause Mimi PAGE results to diverge from PAGE 2009."
},

{
    "location": "validation.html#Deterministic-validations-1",
    "page": "Model Validation",
    "title": "Deterministic validations",
    "category": "section",
    "text": "For each individual Mimi PAGE component, we tested the component with known input data and compared output with values from PAGE 2009. Nearly all values matched within 1%.As an example of how a test file works, consider test_CO2emissions, which serves as a test for the CO2emissions.jl file (within ../src).First, we initialize the model and reference the relevant files (load_paramaters.jl and, notably, CO2emissions.jl). Then we add the CO2emissions component to our model m.using Mimi\nusing Base.Test\n\ninclude(\"../src/load_parameters.jl\")\ninclude(\"../src/CO2emissions.jl\")\n\nm = Model()\nsetindex(m, :time, [2009, 2010, 2020, 2030, 2040, 2050, 2075, 2100, 2150, 2200])\nsetindex(m, :region, [\"EU\", \"USA\", \"OECD\",\"USSR\",\"China\",\"SEAsia\",\"Africa\",\"LatAmerica\"])\n\naddcomponent(m, co2emissions)Then we set the component inputs (baseline emissions and CO2 emissions growth) using exogenous values from PAGE 2009, which are saved in the data folder.setparameter(m, :co2emissions, :e0_baselineCO2emissions, readpagedata(m, \"data/e0_baselineCO2emissions.csv\"))\nsetparameter(m, :co2emissions, :er_CO2emissionsgrowth, readpagedata(m, \"data/er_CO2emissionsgrowth.csv\"))Then we run our model, save the output to the emissions variable. We then load exogenous PAGE 2009 data on emisions into the emissions_compare variable. We test to see if the output from our model matches that from PAGE within 1e-3 precision (it does).##running Model\nrun(m)\n\nemissions = m[:co2emissions,  :e_regionalCO2emissions]\n\n# Recorded data\nemissions_compare = readpagedata(m, \"test/validationdata/e_regionalCO2emissions.csv\")\n\n@test emissions ≈ emissions_compare rtol=1e-3\nThe graph below shows the output from both PAGE 2009 and Mimi PAGE.(Image: CO2graph)"
},

{
    "location": "validation.html#Probabilistic-validation-1",
    "page": "Model Validation",
    "title": "Probabilistic validation",
    "category": "section",
    "text": "For the probabilistic version of the model, we graphed and compared distributions of total damages, total preventative costs, total adaptation costs, and total effects.  Differences between quantiles of the distribution for 4 model end-point variables are shown in the graph below. Error bars show the 95% confidence interval associated with sampling uncertainty only for Mimi PAGE (i.e. they under-estimate the true uncertainty of the difference between PAGE09 and Mimi PAGE)Distributions matched closely (<1.5% difference) for all outputs, based on 100,000 runs.(Image: MC-validation.JPG)"
},

]}

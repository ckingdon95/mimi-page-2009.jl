include("../src/impactlib.jl")
include("comparelib.jl")

testimpact(temp) = impactfunction(temp, .04, .01, 2.5, 3.)
comparesampled(testimpact, "../calibration/figure1-red.csv", 5e-2)

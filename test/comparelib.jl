using Mimi
using Base.Test
using DataFrames

include("../src/load_parameters.jl")

function compare(model::Model, vardata, filepath::AbstractString)
    recorded = readpagedata(filepath)
    @test_approx_eq vardata recorded
end

function comparesampled(func::Function, filepath::AbstractString, eps::Float64=1e-6)
    recorded = readtable(filepath, header=false)
    for ii in 1:nrow(recorded)
        estimate = func(recorded[ii, 1])
        @test_approx_eq_eps estimate recorded[ii, 2] eps
    end
end

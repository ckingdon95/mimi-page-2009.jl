function impactfunction(i_impact, w_impactsatcalibration, iben_initialbenefit, tcal_calibration, pow_impactexponent)
    return ((w_impactsatcalibration + iben_initialbenefit * tcal_calibration) *
            (i_impact/tcal_calibration)^pow_impactexponent -
            i_impact * iben_initialbenefit)
end

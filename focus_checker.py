#import basic values
import pandas as pd
import numpy as np
import mne
import brainflow
import matplotlib.pyplot as plt
import time
import pyautogui 

#import brainflow related libraries
from brainflow.board_shim import BoardShim, BrainFlowInputParams, LogLevels, BoardIds, BrainFlowError
from brainflow.data_filter import DataFilter, FilterTypes, AggOperations, WindowFunctions, DetrendOperations
from brainflow.ml_model import MLModel, BrainFlowMetrics, BrainFlowClassifiers, BrainFlowModelParams

from brainflow.exit_codes import *

#logging
BoardShim.enable_board_logger()
DataFilter.enable_data_logger()
MLModel.enable_ml_logger()

#adding info for the board
params = BrainFlowInputParams()
params.board_id = -1
board_id = -1
params.serial_port = 'COM3'
sampling_rate = BoardShim.get_sampling_rate(board_id)
BoardShim.enable_dev_board_logger()

board = BoardShim(board_id, params)

#prepping board
sampling_rate = BoardShim.get_sampling_rate(board_id)
board.prepare_session()
board.start_stream(4500)
boolean = True
concentration_values = []
concentration_values = np.array(concentration_values)
timestamps = []
are_they_a = []
data = board.get_board_data()


if boolean == True:


    eeg_channels = BoardShim.get_eeg_channels(int(board_id))

    #data filtering
    for count, channel in enumerate(eeg_channels):
        DataFilter.perform_bandstop(data[channel], sampling_rate, 60.0, 4.0, 4,
        FilterTypes.BUTTERWORTH.value, 0)  # bandstop 58 - 62
        DataFilter.perform_bandpass(data[channel], sampling_rate, 21.0, 20.0, 4,
        FilterTypes.BESSEL.value, 0)  # bandpass 11 - 31


    bands = DataFilter.get_avg_band_powers(data, eeg_channels, sampling_r.
    ate, True)
    feature_vector = np.concatenate((bands[0], bands[1]))
    print(feature_vector)
    print(data)

    #concentration
    concentration_params = BrainFlowModelParams(BrainFlowMetrics.CONCENTRATION.value, BrainFlowClassifiers.KNN.value)
    concentration = MLModel(concentration_params)
    concentration.prepare()
    predict_value = concentration.predict(feature_vector)

    print('Concentration: %f' % predict_value)
    concentration.release()

    timestamps.append(BoardShim.get_timestamp_channel(board_id))

    if predict_value > 0.5:
        are_they = 1.0
    else:
        are_they = 0.0
    
    are_they_a.append(are_they)

    if pyautogui.press('enter'):
        boolean = False


concentration_values = [[timestamps], [are_they_a]]
board.stop_stream()
board.release_session()

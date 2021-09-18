#import basic values
import pandas as pd
import numpy as np
import mne
import brainflow
import matplotlib.pyplot as plt
import time

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
time.sleep(5)  
data = board.get_board_data()
board.stop_stream()
board.release_session()

eeg_channels = BoardShim.get_eeg_channels(int(board_id))

bands = DataFilter.get_avg_band_powers(data, eeg_channels, sampling_rate, True)
feature_vector = np.concatenate((bands[0], bands[1]))
#print(feature_vector)
print(data)

#concentration
concentration_params = BrainFlowModelParams(BrainFlowMetrics.CONCENTRATION.value, BrainFlowClassifiers.KNN.value)
concentration = MLModel(concentration_params)
concentration.prepare()
print('Concentration: %f' % concentration.predict(feature_vector))
concentration.release()

#relaxation
relaxation_params = BrainFlowModelParams(BrainFlowMetrics.RELAXATION.value, BrainFlowClassifiers.REGRESSION.value)
relaxation = MLModel(relaxation_params)
relaxation.prepare()
print('Relaxation: %f' % relaxation.predict(feature_vector))
relaxation.release()
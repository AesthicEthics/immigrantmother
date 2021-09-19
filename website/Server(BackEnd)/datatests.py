#concentration values = np.array
#concentration_values = [[timestamps], [are_they_a]] 
import pandas as pd
import numpy as np 
import matplotlib.pyplot as plt
from datetime import datetime 

def AverageTimeSpan(concentration_value):

    concentration_value = np.array(concentration_value)

    time = []
    focus = []

    for i in range(len(concentration_value)):
        for j in range (len(concentration_value[i])):
            if len(concentration_value[i][j]) > 3:
                time.append(concentration_value[i][j])
            else:
                focus.append(int(float(concentration_value[i][j])))


    ## Average attention span algorithim 
    tme = 0 
    for i in range(len(focus)-1):
        if focus[i] == focus[i+1]:
            tme+=1 
        else: 
            pass 

    average_val = tme/len(focus)  

    val = []

    time_0 = time[0].split(":")
    time_f = (time[len(time)-1].split(':'))

    for i in range(len(time_f)):
        if int(time_0[i]) > int(time_f[i]):
            diff = int(time_0[i]) - int(time_f[i])
            if len(val) == 1:
                val.append(diff/60)
            elif len(val) == 2: 
                val.append(diff/120)
            else:
                val.append(diff)
        else:
            diff = int(time_f[i]) - int(time_0[i])
            if len(val) == 1:
                val.append(diff/60)
            elif len(val) == 2: 
                val.append(diff/120)
            else:
                val.append(diff)

    total = 0
    for i in range(len(val)):
        total+= (average_val * val[i])

    if total < 1: 
        total = str(total*60) + " " +"seconds" 
    else:
        total = str(total) + " " +"minutes" 

    return(total)

def Slaps(concentration_value):
    concentration_value = np.array(concentration_value)

    time = []
    focus = []

    for i in range(len(concentration_value)):
        for j in range (len(concentration_value[i])):
            if len(concentration_value[i][j]) > 3:
                time.append(concentration_value[i][j])
            else:
                focus.append(int(float(concentration_value[i][j])))

    tme = 0 
    for i in range(len(focus)):
        if focus[i] == 0:
            tme+=1 
        else: 
            pass 
    
    tme = str(tme) + " slaps revcieved today"
    return(tme)
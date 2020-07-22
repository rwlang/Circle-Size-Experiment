options(max.print = 10000)

# require devtools and fireData packages
if (!require("devtools")) install.packages("devtools")
if (!require("fireData")) devtools::install_github("Kohze/fireData")

library(fireData) # https://github.com/Kohze/fireData


# secret key = QQwfjvlOXolwiMLsf2SleKPuo7D2IZn3WO7i8SS1

# download all files from database
dataBackup(projectURL = "https://circle-size-experiment.firebaseio.com", #databaseURL
           secretKey = "QQwfjvlOXolwiMLsf2SleKPuo7D2IZn3WO7i8SS1", #Secret Key of the database
           "./data/data.json") # file path of where to save the data (out default assumes cloning the GitHub repo)


# install.packages("jsonlite")
library("jsonlite")


#································To check the number of data points in the database ··············································

# open the file that was just downloaded
data<-jsonlite::fromJSON(txt = "./data/data.json")
data$
data1<-fromJSON(txt = data$`64de8a25-32ad-4b57-b87e-f26ea7be6270`$data,simplifyDataFrame = T,flatten = T)
data2<-fromJSON(txt = data$`6f07d15a-b996-43e9-977a-c37ef73bfbd5`$data,simplifyDataFrame = T,flatten = T)
data3<-fromJSON(txt = data$`71dff612-b624-4eee-895b-d6f9dad2345e`$data,simplifyDataFrame = T,flatten = T)
data4<-fromJSON(txt = data$`8ca2cfa3-efd9-44af-90e5-3572d661b157`$data,simplifyDataFrame = T,flatten = T)
data5<-fromJSON(txt = data$`a37c5ec3-8842-490f-bfef-b8f31e127c74`$data,simplifyDataFrame = T,flatten = T)
data6<-fromJSON(txt = data$`ac704950-7bab-406e-a3be-4ad54d17ac52`$data,simplifyDataFrame = T,flatten = T)

#data3<-cbind(data1,data2)



# install.packages("plyr")
library("plyr")

# collapse json levels
#data<-rbind.fill(data)

#********************************************************************************************************************************
#*******************Data will still have json levels that need to be unpacked if you collected survey responses******************
#*******************One way to do this will be demonstrated in data_analysis.R***************************************************
#********************************************************************************************************************************

# number of subjects
#length(unique(data$subject))

# save data to .csv file
#write.csv(data1, "./data/data1.csv", row.names = FALSE)
library(data.table)
library(dplyr)

Demographics <- (data6[, -c(1:3, 6:15, 35:64)])
Screen_Dim <- (data6[55:61])
Condition = (data6[, -c(2:7, 9:34, 37:42, 47:64)])
xPos <-capture.output(data6[40])
yPos <-capture.output(data6[41])
P_data <-(data6[, -c(39:42, 64)])
timestamps <- capture.output(data6[39])

write.csv(Demographics, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/Demo.csv", row.names = FALSE)
write.csv(Condition, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/Conditions.csv", row.names = FALSE)
write.csv(Screen_Dim, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/Screen_Dim.csv", row.names = FALSE)
write.csv(P_data, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/P_data.csv", row.names = FALSE)
write.csv(xPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/xPos.csv", row.names = FALSE)
write.csv(yPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/yPos.csv", row.names = FALSE)
write.csv(timestamps, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P6/timestamps.csv", row.names = FALSE)


#Trying to merge data.

library(writexl)
sheets <- list("xPos" = xPos, "yPos" = yPos) #assume sheet1 and sheet2 are data frames
write_xlsx(sheets, "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/yPos.csv")

library(xlsx)

write.xlsx(xPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="X_Pos", row.names=FALSE) #"C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos2.csv", row.names = FALSE)
write.xlsx(yPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="Y_Pos", append=TRUE, row.names=FALSE)



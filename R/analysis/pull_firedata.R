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
#data7<-fromJSON(txt = data$`bb8c5289-c20c-4d27-aa56-5e55c36e71ab`$data,simplifyDataFrame = T,flatten = T)
data8<-fromJSON(txt = data$`ae49931e-dd46-4dac-98ca-add4dd5ebdbf`$data,simplifyDataFrame = T,flatten = T)
data9<-fromJSON(txt = data$`58396ba4-14ef-4e13-967a-55d06203c6f3`$data,simplifyDataFrame = T,flatten = T)
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





Demographics <-head(data8[c("Participant_Consent", 
                            "if-you-would-like-to-receive-a-general-summary-of-the-results-from-this-study-when-it-is-completed-please-provide-your-email-address-below:", 
                            "please-record-the-makemodel-and-(diagonal)-screen-size-of-the-device-you-are-using-to-complete-the-experiment-(e.g.-macbook-pro-13.3-in):", 
                            "how-are-you-controlling-the-cursor-on-your-device-1", 
                            "how-are-you-controlling-the-cursor-on-your-device-2", 
                            "how-are-you-controlling-the-cursor-on-your-device-3", 
                            "what-is-your-age-(years)", 
                            "vision:", 
                            "sex:",
                            "throw-a-ball:", 
                            "brush-your-teeth:", 
                            "eat-soup-with-a-spoon:", 
                            "comb-your-hair:", 
                            "cut-bread-with-a-knife:", 
                            "swing-a-tennisbadminton-racquet-or-bat:", 
                            "hammer-a-nail:", 
                            "point-to-something-accurately:", 
                            "write-your-name:", 
                            "control-the-cursor-when-using-a-computer:", 
                            "do-you-play-any-eye-hand-coordination-sports", 
                            "if-yes-which-sports-do-you-play"
                            )], n = 1000)
                                                         
Screen_Dim <- head(data8[c("meta.screen_width",	
                           "meta.screen_height",	
                           "meta.scroll_width",	
                           "meta.scroll_height",	
                           "meta.window_innerWidth",	
                           "meta.window_innerHeight",
                           "meta.devicePixelRatio"
                           )], n = 1000)

Condition <- head(data8[c("sender",
                          "duration",
                          "Horizontal_Pos",
                          "Vertical_Pos",
                          "P_Size_L",
                          "P_Size_R",
                          "P_Size",
                          "Position"
                          )], n = 1000)

xPos <-capture.output(data8["xpos"])
yPos <-capture.output(data8["ypos"])





write.csv(Demographics, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/Demo.csv", row.names = FALSE)
write.csv(Condition, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/Conditions.csv", row.names = FALSE)
write.csv(Screen_Dim, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/Screen_Dim.csv", row.names = FALSE)
write.csv(xPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/xPos.csv", row.names = FALSE)
write.csv(yPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/yPos.csv", row.names = FALSE)

write.csv(P_data, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/P_data.csv", row.names = FALSE)
write.csv(timestamps, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/timestamps.csv", row.names = FALSE)


#Trying to merge data.

library(writexl)
sheets <- list("xPos" = xPos, "yPos" = yPos) #assume sheet1 and sheet2 are data frames
write_xlsx(sheets, "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/yPos.csv")

library(xlsx)

write.xlsx(xPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="X_Pos", row.names=FALSE) #"C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos2.csv", row.names = FALSE)
write.xlsx(yPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="Y_Pos", append=TRUE, row.names=FALSE)



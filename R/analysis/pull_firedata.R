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

#dataZ<-jsonlite::fromJSON(txt = "C:/Users/Ryan Langridge/Desktop/Online Participant Data/circle-size-experiment-export (July 23, 2020).json")
#dataZ

  
data1<-fromJSON(txt = data$`18650c0d-5501-4b49-b00d-5668407ad989`$data,simplifyDataFrame = T,flatten = T)
data2<-fromJSON(txt = data$`dd0d2b4f-9f33-4e36-b182-80738c07e17e`$data,simplifyDataFrame = T,flatten = T)
data3<-fromJSON(txt = data$`2f89af16-d09a-4177-81a7-7b6f0e6841f4`$data,simplifyDataFrame = T,flatten = T)
data4<-fromJSON(txt = data$`397c5f32-17bc-4b61-b014-68c77f41055e`$data,simplifyDataFrame = T,flatten = T)
data5<-fromJSON(txt = data$`e6ba0fac-2e02-4fe7-9ae5-1f98f3930506`$data,simplifyDataFrame = T,flatten = T)
data6<-fromJSON(txt = data$`f97ab624-45d8-41ea-a953-a4b511e69d43`$data,simplifyDataFrame = T,flatten = T)
data7<-fromJSON(txt = data$`55a6a9ab-a782-4be9-9763-c3763924da1b`$data,simplifyDataFrame = T,flatten = T)
data8<-fromJSON(txt = data$`03b8a67a-b626-4e1f-8d81-1be993b1b504`$data,simplifyDataFrame = T,flatten = T)
data9<-fromJSON(txt = data$`c75723dc-38eb-41bc-bcb9-e4cb1f8abd3f`$data,simplifyDataFrame = T,flatten = T)
data10<-fromJSON(txt = data$`269c20cc-5c4b-419e-b652-0b0d53248a0c`$data,simplifyDataFrame = T,flatten = T)
data11<-fromJSON(txt = data$`f4e2586c-d20b-437d-b9fb-451c0d6b1ddf`$data,simplifyDataFrame = T,flatten = T)
data12<-fromJSON(txt = data$`4fcc23a6-442e-4cf0-9ecc-df75f4279734`$data,simplifyDataFrame = T,flatten = T)
data13<-fromJSON(txt = data$`1adfabf2-8ffe-47f3-8c02-599286142f89`$data,simplifyDataFrame = T,flatten = T)
data14<-fromJSON(txt = data$`40235ce8-ef61-4c22-b5bc-feb5b492b113`$data,simplifyDataFrame = T,flatten = T)
data15<-fromJSON(txt = data$`ed9f35d9-0229-4ac3-a870-a7931a7be261`$data,simplifyDataFrame = T,flatten = T)
data16<-fromJSON(txt = data$`9abb2633-ff4a-4c6f-a22e-d631e7057345`$data,simplifyDataFrame = T,flatten = T)
data17<-fromJSON(txt = data$`15370288-f5af-4620-b0ad-3a695ace50d5`$data,simplifyDataFrame = T,flatten = T)
data18<-fromJSON(txt = data$`240eda01-d4be-41e2-9139-a8e2da830938`$data,simplifyDataFrame = T,flatten = T)
data19<-fromJSON(txt = data$`d147d0c9-88e6-467b-a234-e39552e17547`$data,simplifyDataFrame = T,flatten = T)
data20<-fromJSON(txt = data$`afff96c7-5d5a-42a6-95cd-fdc53138d412`$data,simplifyDataFrame = T,flatten = T)
data21<-fromJSON(txt = data$`22beaa9b-7aa0-457f-b28b-29b318e3df39`$data,simplifyDataFrame = T,flatten = T)
data22<-fromJSON(txt = data$`6dbda1d4-2976-49e6-ac08-ba3669c1ef32`$data,simplifyDataFrame = T,flatten = T)
data23<-fromJSON(txt = data$`00c11eb6-c254-4e23-ad15-0c5660a28cb4`$data,simplifyDataFrame = T,flatten = T)
data24<-fromJSON(txt = data$`08a9e90c-959f-49b4-9e29-6c70169c9050`$data,simplifyDataFrame = T,flatten = T)
data25<-fromJSON(txt = data$`16a28954-3208-48fd-ae5f-a09f0ddfbfb0`$data,simplifyDataFrame = T,flatten = T)
data26<-fromJSON(txt = data$`31541db6-bcfa-4c13-83cd-d057bc412c27`$data,simplifyDataFrame = T,flatten = T)
data27<-fromJSON(txt = data$`5fd7c543-12ec-471e-a3d2-5c24ed960764`$data,simplifyDataFrame = T,flatten = T)
data28<-fromJSON(txt = data$`ccaaeeca-4e67-4352-a4e6-7b8d2fcee558`$data,simplifyDataFrame = T,flatten = T)

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





Demographics <-head(data28[c("Participant_Consent", 
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
                                                         
Screen_Dim <- head(data28[c("meta.screen_width",	
                           "meta.screen_height",	
                           "meta.scroll_width",	
                           "meta.scroll_height",	
                           "meta.window_innerWidth",	
                           "meta.window_innerHeight",
                           "meta.devicePixelRatio"
                           )], n = 1000)

Condition <- head(data28[c("sender",
                          "duration",
                          "Horizontal_Pos",
                          "Vertical_Pos",
                          "P_Size_L",
                          "P_Size_R",
                          "P_Size",
                          "Position"
                          )], n = 1000)

xPos <-capture.output(data28["xpos"])
yPos <-capture.output(data28["ypos"])





write.csv(Demographics, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P28/Demo.csv", row.names = FALSE)
write.csv(Condition, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P28/Conditions.csv", row.names = FALSE)
write.csv(Screen_Dim, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P28/Screen_Dim.csv", row.names = FALSE)
write.csv(xPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P28/xPos.csv", row.names = FALSE)
write.csv(yPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P28/yPos.csv", row.names = FALSE)

write.csv(P_data, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/P_data.csv", row.names = FALSE)
write.csv(timestamps, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/timestamps.csv", row.names = FALSE)


#Trying to merge data.

library(writexl)
sheets <- list("xPos" = xPos, "yPos" = yPos) #assume sheet1 and sheet2 are data frames
write_xlsx(sheets, "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/yPos.csv")

library(xlsx)

write.xlsx(xPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="X_Pos", row.names=FALSE) #"C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos2.csv", row.names = FALSE)
write.xlsx(yPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="Y_Pos", append=TRUE, row.names=FALSE)



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
data29<-fromJSON(txt = data$`024710f5-a199-4012-903d-b02547fb856a`$data,simplifyDataFrame = T,flatten = T)
data30<-fromJSON(txt = data$`02ee00db-3aba-499d-8a8d-01c1df882900`$data,simplifyDataFrame = T,flatten = T)
data31<-fromJSON(txt = data$`1b62a27f-1681-4cab-8280-c5421fc2f788`$data,simplifyDataFrame = T,flatten = T)
data32<-fromJSON(txt = data$`40be06c7-7f7d-4048-81f9-3b173614c91b`$data,simplifyDataFrame = T,flatten = T)
data33<-fromJSON(txt = data$`7648221a-f7ae-4419-a897-b8151de7bb6a`$data,simplifyDataFrame = T,flatten = T)
data34<-fromJSON(txt = data$`a7d78e8c-5293-4d7c-b186-d35f25f041e4`$data,simplifyDataFrame = T,flatten = T)
data35<-fromJSON(txt = data$`aed99492-c26a-4579-9f48-3babb662d118`$data,simplifyDataFrame = T,flatten = T)
data36<-fromJSON(txt = data$`c1d6a7b7-42e8-478a-89a1-9672e3cfde1e`$data,simplifyDataFrame = T,flatten = T)
data37<-fromJSON(txt = data$`f16e746f-0b44-42e3-9ad8-bafe9a69a4de`$data,simplifyDataFrame = T,flatten = T)
data38<-fromJSON(txt = data$`025426e5-c547-47af-80a0-8303bc278b9d`$data,simplifyDataFrame = T,flatten = T)
data39<-fromJSON(txt = data$`03acc779-64af-4064-87f7-013a1786f0df`$data,simplifyDataFrame = T,flatten = T)
data40<-fromJSON(txt = data$`80772b07-d10a-47f9-8f5f-f2e6f9bed014`$data,simplifyDataFrame = T,flatten = T)
data41<-fromJSON(txt = data$`e8ee0155-ac52-4bd3-a114-f5fb7bdcfa75`$data,simplifyDataFrame = T,flatten = T)

data42<-fromJSON(txt = data$`1d80e8ef-5a36-4c88-8541-be6d41c4e687`$data,simplifyDataFrame = T,flatten = T)
data43<-fromJSON(txt = data$`43307d5a-be45-4d86-aae1-2d55666c4815`$data,simplifyDataFrame = T,flatten = T)
data44<-fromJSON(txt = data$`49516f7d-7704-437a-a2b5-c5605793d43f`$data,simplifyDataFrame = T,flatten = T)
data45<-fromJSON(txt = data$`4d3f3f9f-9a8d-4339-aba9-42359baafb4c`$data,simplifyDataFrame = T,flatten = T)
data46<-fromJSON(txt = data$`85782356-4dec-414f-99c8-e9eeb818e93e`$data,simplifyDataFrame = T,flatten = T)
data47<-fromJSON(txt = data$`8fe8e276-bd24-495c-8ded-579f89f08e96`$data,simplifyDataFrame = T,flatten = T)
data48<-fromJSON(txt = data$`a6cb0711-dc0f-44bc-88da-d611aab36ff1`$data,simplifyDataFrame = T,flatten = T)
data49<-fromJSON(txt = data$`c0c5d4a4-ef31-4fa7-95ca-8b803b26f598`$data,simplifyDataFrame = T,flatten = T)
data50<-fromJSON(txt = data$`c1eac32c-1395-45b2-8c2e-83ad58362c54`$data,simplifyDataFrame = T,flatten = T)
data51<-fromJSON(txt = data$`0331180f-08b1-4873-b40c-d935f87c8960`$data,simplifyDataFrame = T,flatten = T)
data52<-fromJSON(txt = data$`19a12400-5438-48c5-86e9-9d687098c769`$data,simplifyDataFrame = T,flatten = T)
data53<-fromJSON(txt = data$`66f2ea02-2776-4e42-9b5c-25f5152468b0`$data,simplifyDataFrame = T,flatten = T)
data54<-fromJSON(txt = data$`681d5d0e-efe6-4f3e-b963-338888b405b7`$data,simplifyDataFrame = T,flatten = T)
data55<-fromJSON(txt = data$`fb999dcf-67d0-4b12-b9e3-9d8465ae21db`$data,simplifyDataFrame = T,flatten = T)
data56<-fromJSON(txt = data$`fc790d3b-6ed9-464b-a73d-6b48cbda81b3`$data,simplifyDataFrame = T,flatten = T)

data57<-fromJSON(txt = data$`2625df09-01d8-4220-9085-25fc589b9f2d`$data,simplifyDataFrame = T,flatten = T)
data58<-fromJSON(txt = data$`574f7cf8-81c3-4625-876e-4001b75e8db4`$data,simplifyDataFrame = T,flatten = T)
data59<-fromJSON(txt = data$`694e8470-9144-45ff-b83f-60d02ac94e5a`$data,simplifyDataFrame = T,flatten = T)
data60<-fromJSON(txt = data$`ae0a4a82-325b-48a8-9aa4-8140fe5f667b`$data,simplifyDataFrame = T,flatten = T)
data61<-fromJSON(txt = data$`ebcc98e3-9b83-44e4-a2d0-fa2a8dfb25de`$data,simplifyDataFrame = T,flatten = T)
data62<-fromJSON(txt = data$`f27ccb10-e7c8-4c61-a14e-d6a8f3ccd38f`$data,simplifyDataFrame = T,flatten = T)
data63<-fromJSON(txt = data$`11af166a-fdac-4e27-8bea-a27334694a5e`$data,simplifyDataFrame = T,flatten = T)
data64<-fromJSON(txt = data$`463b3e6c-7a49-44cb-81dc-f9b39165cfdd`$data,simplifyDataFrame = T,flatten = T)
data65<-fromJSON(txt = data$`4de314c7-64fe-450a-9a5d-96406c6c9f8e`$data,simplifyDataFrame = T,flatten = T)
data66<-fromJSON(txt = data$`7cb477b8-b751-471d-b38c-06307375fcaa`$data,simplifyDataFrame = T,flatten = T)
data67<-fromJSON(txt = data$`8c75692e-1f34-45fb-9b12-a78005fa4c5d`$data,simplifyDataFrame = T,flatten = T)
data68<-fromJSON(txt = data$`a9b5e941-5e0d-49d7-b7d5-6fa2768240c1`$data,simplifyDataFrame = T,flatten = T)
data69<-fromJSON(txt = data$`33aa5f23-dc4f-400c-9170-963c91943b51`$data,simplifyDataFrame = T,flatten = T)
data70<-fromJSON(txt = data$`df448c72-9dba-401a-ae5c-3a3d74f3bfb5`$data,simplifyDataFrame = T,flatten = T)

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





Demographics <-head(data70[c("Participant_Consent", 
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
                                                         
Screen_Dim <- head(data70[c("meta.screen_width",	
                           "meta.screen_height",	
                           "meta.scroll_width",	
                           "meta.scroll_height",	
                           "meta.window_innerWidth",	
                           "meta.window_innerHeight",
                           "meta.devicePixelRatio"
                           )], n = 1000)

Condition <- head(data70[c("sender",
                          "duration",
                          "Horizontal_Pos",
                          "Vertical_Pos",
                          "P_Size_L",
                          "P_Size_R",
                          "P_Size",
                          "Position"
                          )], n = 1000)

xPos <-capture.output(data70["xpos"])
yPos <-capture.output(data70["ypos"])





write.csv(Demographics, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P70/Demo.csv", row.names = FALSE)
write.csv(Condition, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P70/Conditions.csv", row.names = FALSE)
write.csv(Screen_Dim, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P70/Screen_Dim.csv", row.names = FALSE)
write.csv(xPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P70/xPos.csv", row.names = FALSE)
write.csv(yPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P70/yPos.csv", row.names = FALSE)

write.csv(P_data, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/P_data.csv", row.names = FALSE)
write.csv(timestamps, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/timestamps.csv", row.names = FALSE)


#Trying to merge data.

library(writexl)
sheets <- list("xPos" = xPos, "yPos" = yPos) #assume sheet1 and sheet2 are data frames
write_xlsx(sheets, "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/yPos.csv")

library(xlsx)

write.xlsx(xPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="X_Pos", row.names=FALSE) #"C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos2.csv", row.names = FALSE)
write.xlsx(yPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="Y_Pos", append=TRUE, row.names=FALSE)



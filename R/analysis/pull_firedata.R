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
data1<-fromJSON(txt = data$`1234`$data,simplifyDataFrame = T,flatten = T)
data2<-fromJSON(txt = data$`e79ee784-8b22-4739-bfd6-a18c00fe2b8a`$data,simplifyDataFrame = T,flatten = T)

data3<-rbind(data1,data2)



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
write.csv(data1, "./data/data1.csv", row.names = FALSE)

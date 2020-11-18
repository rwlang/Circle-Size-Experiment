options(max.print = 10000)

# require devtools and fireData packages
if (!require("devtools")) install.packages("devtools")
if (!require("fireData")) devtools::install_github("Kohze/fireData")

library(fireData) # https://github.com/Kohze/fireData


# secret key 1 = QQwfjvlOXolwiMLsf2SleKPuo7D2IZn3WO7i8SS1
# secret key 2 = gA5OmNBFdB98HlrMJXpBFc7uQPQTlG9Ml77UkZGW

# download all files from database
dataBackup(projectURL = "https://circle-size-experiment-2.firebaseio.com", #databaseURL
           secretKey = "gA5OmNBFdB98HlrMJXpBFc7uQPQTlG9Ml77UkZGW", #Secret Key of the database
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
data71<-fromJSON(txt = data$`f02e1158-e918-4dad-bdd2-81260bc61924`$data,simplifyDataFrame = T,flatten = T)

data72<-fromJSON(txt = data$`26f4fd49-ac7b-4eb7-8782-5c6a6a402a10`$data,simplifyDataFrame = T,flatten = T)
data73<-fromJSON(txt = data$`2ffad30f-6964-4511-a724-f8565e493041`$data,simplifyDataFrame = T,flatten = T)
data74<-fromJSON(txt = data$`4d013a1a-86d4-4d3d-854b-57a9ec36f133`$data,simplifyDataFrame = T,flatten = T)
data75<-fromJSON(txt = data$`5dd6c30a-549e-4a08-a4cb-dded85c95a5d`$data,simplifyDataFrame = T,flatten = T)
data76<-fromJSON(txt = data$`60c02740-b983-40cd-bd75-5e553704f09d`$data,simplifyDataFrame = T,flatten = T)
data77<-fromJSON(txt = data$`6530278f-170c-407e-9553-1fffc53c4c84`$data,simplifyDataFrame = T,flatten = T)
data78<-fromJSON(txt = data$`9d6f3173-fbab-41c4-a792-d4008bec6481`$data,simplifyDataFrame = T,flatten = T)
data79<-fromJSON(txt = data$`b51d07ec-2754-420d-840e-1a5726b397cf`$data,simplifyDataFrame = T,flatten = T)
data80<-fromJSON(txt = data$`f74b0e79-8043-41f7-a172-ce21104b2747`$data,simplifyDataFrame = T,flatten = T)
data81<-fromJSON(txt = data$`094c1476-1f82-424e-a88e-ac1459871c6c`$data,simplifyDataFrame = T,flatten = T)

data82<-fromJSON(txt = data$`0cb88af9-8930-4634-8526-c9bd6bd62705`$data,simplifyDataFrame = T,flatten = T)
data83<-fromJSON(txt = data$`2b6e6ec2-2062-42ad-9dd5-e6781b222aa3`$data,simplifyDataFrame = T,flatten = T)
data84<-fromJSON(txt = data$`44e5ff6e-4b38-47f4-8246-076e41f4fa27`$data,simplifyDataFrame = T,flatten = T)
data85<-fromJSON(txt = data$`4ee4077f-880a-417e-90d2-44ebcf55dff6`$data,simplifyDataFrame = T,flatten = T)
data86<-fromJSON(txt = data$`5f5f74b7-ae15-43eb-ac74-4d433aea186b`$data,simplifyDataFrame = T,flatten = T)
data87<-fromJSON(txt = data$`a5764829-69df-4726-9592-c0e36eb03b7a`$data,simplifyDataFrame = T,flatten = T)
data88<-fromJSON(txt = data$`d79fa93f-ebec-429c-ad2c-9c5ca2e764f7`$data,simplifyDataFrame = T,flatten = T)
data89<-fromJSON(txt = data$`e4246d0e-76e8-4b27-bbef-8ef9121cf609`$data,simplifyDataFrame = T,flatten = T)

data90<-fromJSON(txt = data$`02d67ca5-1dc9-4615-a90f-c46275f62edc`$data,simplifyDataFrame = T,flatten = T)
data91<-fromJSON(txt = data$`22486392-701d-4141-a3ca-3dac395e0a5d`$data,simplifyDataFrame = T,flatten = T)
data92<-fromJSON(txt = data$`3519027b-8d6a-4115-86a9-6d763fc187d2`$data,simplifyDataFrame = T,flatten = T)
data93<-fromJSON(txt = data$`8a41dff0-a1ac-46aa-8ab0-a447ce116713`$data,simplifyDataFrame = T,flatten = T)
data94<-fromJSON(txt = data$`939c7fd6-99bc-42b6-ad86-eea38043f063`$data,simplifyDataFrame = T,flatten = T)
data95<-fromJSON(txt = data$`dbefc843-b7cd-40cc-a55a-52b235806100`$data,simplifyDataFrame = T,flatten = T)
data96<-fromJSON(txt = data$`e8a9fb69-4cc4-49a7-b725-e90aa09909bf`$data,simplifyDataFrame = T,flatten = T)
data97<-fromJSON(txt = data$`4efa54fd-2092-4ca4-bbf0-a9c71a069c89`$data,simplifyDataFrame = T,flatten = T)
data98<-fromJSON(txt = data$`9893d1d9-f7b4-4349-8c73-d7eeb5c011ab`$data,simplifyDataFrame = T,flatten = T)

data99<-fromJSON(txt = data$`08b4e849-66c1-42ea-8c08-b492037ee62d`$data,simplifyDataFrame = T,flatten = T)
data100<-fromJSON(txt = data$`1ffd5db3-9b7b-4ab2-aaa5-32fc6844eb90`$data,simplifyDataFrame = T,flatten = T)
data101<-fromJSON(txt = data$`37bc46c0-5575-4c3c-8d2c-c21f6ea5752e`$data,simplifyDataFrame = T,flatten = T)
data102<-fromJSON(txt = data$`a68fe524-bc18-4d21-a3dc-d020de0c0944`$data,simplifyDataFrame = T,flatten = T)
data103<-fromJSON(txt = data$`ba1ac6a7-c941-4277-824f-ce9d29fb393f`$data,simplifyDataFrame = T,flatten = T)
data104<-fromJSON(txt = data$`e767a441-566e-4aa5-a6ad-9ab8dc769104`$data,simplifyDataFrame = T,flatten = T)
data105<-fromJSON(txt = data$`eca2eae6-d390-4a29-a12b-6ea5df82ee76`$data,simplifyDataFrame = T,flatten = T)

data106<-fromJSON(txt = data$`5cf89270-66dc-4f14-b1bd-556a6b216781`$data,simplifyDataFrame = T,flatten = T)
data107<-fromJSON(txt = data$`12cd3633-4f5c-4225-b6cd-2b96a811bf59`$data,simplifyDataFrame = T,flatten = T)
data108<-fromJSON(txt = data$`33c94fee-4a2d-4c89-96fb-2cc41b585596`$data,simplifyDataFrame = T,flatten = T)
data109<-fromJSON(txt = data$`47912989-04da-4162-b429-2c327f111170`$data,simplifyDataFrame = T,flatten = T)
data110<-fromJSON(txt = data$`4bebc1eb-b421-46a5-b093-380718f16963`$data,simplifyDataFrame = T,flatten = T)
data111<-fromJSON(txt = data$`a637f024-f1f5-4db1-bfee-3550d263b87d`$data,simplifyDataFrame = T,flatten = T)
data112<-fromJSON(txt = data$`c3f14043-bf82-4659-879f-0f833c182096`$data,simplifyDataFrame = T,flatten = T)
data113<-fromJSON(txt = data$`d3ed7b95-71c1-4c58-9375-4ae61b5d36a2`$data,simplifyDataFrame = T,flatten = T)
data114<-fromJSON(txt = data$`e6d7d404-02af-45ff-bda0-80848de9846c`$data,simplifyDataFrame = T,flatten = T)
data115<-fromJSON(txt = data$`ea65e66a-e16b-4192-bc67-63fbae4ba78d`$data,simplifyDataFrame = T,flatten = T)

data116<-fromJSON(txt = data$`1b2b4989-1235-4c85-bd0e-578b42fbb297`$data,simplifyDataFrame = T,flatten = T)
data117<-fromJSON(txt = data$`5a806feb-4641-44de-9462-bec8a98b5085`$data,simplifyDataFrame = T,flatten = T)
data118<-fromJSON(txt = data$`87aec835-2340-4cc7-a52a-e7bf68350ac1`$data,simplifyDataFrame = T,flatten = T)
data119<-fromJSON(txt = data$`b88ab682-faa9-4cd6-bfa8-361208f7c0e5`$data,simplifyDataFrame = T,flatten = T)
data120<-fromJSON(txt = data$`e9bb639a-6bcc-4d64-b18e-d538d493f04d`$data,simplifyDataFrame = T,flatten = T)
data121<-fromJSON(txt = data$`fa2a8a06-7f7d-4c1c-af79-0787408f143c`$data,simplifyDataFrame = T,flatten = T)
data122<-fromJSON(txt = data$`9a55ec77-8e40-4c64-bc52-5948300d1d03`$data,simplifyDataFrame = T,flatten = T)

data123<-fromJSON(txt = data$`25c6b2fb-3c5e-4116-a44f-b22adfb3f61d`$data,simplifyDataFrame = T,flatten = T)
data124<-fromJSON(txt = data$`49d73e37-ee49-474a-afc5-5196287d1964`$data,simplifyDataFrame = T,flatten = T)
data125<-fromJSON(txt = data$`4d9dfb9c-cf4f-4cc9-91a2-5ca7b1aa7a36`$data,simplifyDataFrame = T,flatten = T)
data126<-fromJSON(txt = data$`6350e2bf-d21e-4a83-a65f-6dbbc1cc2467`$data,simplifyDataFrame = T,flatten = T)
data127<-fromJSON(txt = data$`83307d88-9c35-454b-b5d6-1733e8da5b4a`$data,simplifyDataFrame = T,flatten = T)
data128<-fromJSON(txt = data$`a217f162-d6c6-4087-a294-3a76e22e6254`$data,simplifyDataFrame = T,flatten = T)
data129<-fromJSON(txt = data$`b6941641-1996-4930-9850-106b0f995e85`$data,simplifyDataFrame = T,flatten = T)
data130<-fromJSON(txt = data$`e673849d-f5b6-4d89-a940-20e4f5c30625`$data,simplifyDataFrame = T,flatten = T)
data131<-fromJSON(txt = data$`f8abf1d0-5bfd-4f44-8670-bb32890c8f5c`$data,simplifyDataFrame = T,flatten = T)

data132<-fromJSON(txt = data$`2975bf0e-5e0c-4f77-8326-a09b2dbe2cfc`$data,simplifyDataFrame = T,flatten = T)
data133<-fromJSON(txt = data$`59dffc8f-bef3-4101-8946-31baeeaa33c0`$data,simplifyDataFrame = T,flatten = T)
data134<-fromJSON(txt = data$`5e850b7e-8da1-4a0f-afaa-960225288c13`$data,simplifyDataFrame = T,flatten = T)
data135<-fromJSON(txt = data$`780dcd25-8818-4e78-a81c-5a1c3d598604`$data,simplifyDataFrame = T,flatten = T)
data136<-fromJSON(txt = data$`992eda57-ca92-4598-a441-695b7581773e`$data,simplifyDataFrame = T,flatten = T)
data137<-fromJSON(txt = data$`a98b11f9-2687-4e61-b45c-12f555b73d72`$data,simplifyDataFrame = T,flatten = T)
data138<-fromJSON(txt = data$`b4b20195-02b6-499b-bf1e-04f4b03f81d2`$data,simplifyDataFrame = T,flatten = T)

data139<-fromJSON(txt = data$`09c48261-1769-4600-a49c-7a09dd22f4a1`$data,simplifyDataFrame = T,flatten = T)
data140<-fromJSON(txt = data$`1871c622-cc2c-4665-bc4a-b4c4491fbc29`$data,simplifyDataFrame = T,flatten = T)
data141<-fromJSON(txt = data$`1a142a65-63b7-4417-9501-83ec277d2144`$data,simplifyDataFrame = T,flatten = T)
data142<-fromJSON(txt = data$`32da5dad-1a11-4b32-8ae8-1660073d4aea`$data,simplifyDataFrame = T,flatten = T)
data143<-fromJSON(txt = data$`43b555d7-b4dc-4404-a62d-2802fbf6cc48`$data,simplifyDataFrame = T,flatten = T)
data144<-fromJSON(txt = data$`67387844-417d-4bef-b5a1-3e2aff1400e3`$data,simplifyDataFrame = T,flatten = T)
data145<-fromJSON(txt = data$`f1a95a32-7d41-4872-ac32-017bb7c377de`$data,simplifyDataFrame = T,flatten = T)

data146<-fromJSON(txt = data$`1742443d-7e17-474d-b03e-18bf72fd1eef`$data,simplifyDataFrame = T,flatten = T)
data147<-fromJSON(txt = data$`2a157e9b-8bae-4ed2-85f4-684be996f648`$data,simplifyDataFrame = T,flatten = T)
data148<-fromJSON(txt = data$`43bf9a99-15a1-4020-8b9f-57d9d9e3c2ba`$data,simplifyDataFrame = T,flatten = T)
data149<-fromJSON(txt = data$`84d5f7ae-9799-45fb-970a-72e832994562`$data,simplifyDataFrame = T,flatten = T)
data150<-fromJSON(txt = data$`894859d0-f565-43cb-935b-10db2567ef5c`$data,simplifyDataFrame = T,flatten = T)
data151<-fromJSON(txt = data$`975726a5-f77b-40d4-bc86-e1dc0ae8ea41`$data,simplifyDataFrame = T,flatten = T)
data152<-fromJSON(txt = data$`ee0a2e0d-bb58-4600-93bf-8b411c1b9fdd`$data,simplifyDataFrame = T,flatten = T)
data153<-fromJSON(txt = data$`8ea3e177-f699-427a-bfcd-c7e9850c1cab`$data,simplifyDataFrame = T,flatten = T)
data154<-fromJSON(txt = data$`e3767e17-ecac-4887-91b7-01bea2cf1955`$data,simplifyDataFrame = T,flatten = T)

data155<-fromJSON(txt = data$`07552c10-cf6a-418d-8034-92a99f0999fb`$data,simplifyDataFrame = T,flatten = T)
data156<-fromJSON(txt = data$`285cb798-d784-4297-aaf7-28a7882eff64`$data,simplifyDataFrame = T,flatten = T)
data157<-fromJSON(txt = data$`55a1fe01-274d-4618-9221-140cef912683`$data,simplifyDataFrame = T,flatten = T)
data158<-fromJSON(txt = data$`5a8c7ca2-59ab-4d2e-9c71-6c127da439dc`$data,simplifyDataFrame = T,flatten = T)
data159<-fromJSON(txt = data$`7364bb37-b969-416e-bb8b-ed1bf67a3986`$data,simplifyDataFrame = T,flatten = T)
data160<-fromJSON(txt = data$`7463ca94-4861-47b9-888d-bde649a3d929`$data,simplifyDataFrame = T,flatten = T)
data161<-fromJSON(txt = data$`77c17253-85af-4e98-a5d9-f2f6a5f250a6`$data,simplifyDataFrame = T,flatten = T)
data162<-fromJSON(txt = data$`7ee02c4a-9e8f-45dc-ad76-ab3932c7071e`$data,simplifyDataFrame = T,flatten = T)
data163<-fromJSON(txt = data$`95a61d8b-fb04-4f3b-bfc7-4682dbfb87e1`$data,simplifyDataFrame = T,flatten = T)
data164<-fromJSON(txt = data$`a1c9dcc5-1fe6-4ed0-b3b2-7cf92e42674b`$data,simplifyDataFrame = T,flatten = T)
data165<-fromJSON(txt = data$`ac437006-6294-479e-a2cc-9de91a8885ca`$data,simplifyDataFrame = T,flatten = T)
data166<-fromJSON(txt = data$`b21118c0-ab03-4586-a197-282fd52bd13b`$data,simplifyDataFrame = T,flatten = T)
data167<-fromJSON(txt = data$`c0aa22ad-423a-42ab-a960-00b6acbd4312`$data,simplifyDataFrame = T,flatten = T)
data168<-fromJSON(txt = data$`ce28b142-c7ef-450e-b11e-4e849aa4b3d2`$data,simplifyDataFrame = T,flatten = T)
data169<-fromJSON(txt = data$`de339054-7c2d-4201-a864-1c288f24e3e7`$data,simplifyDataFrame = T,flatten = T)
data170<-fromJSON(txt = data$`ded8b0d6-5831-4da3-a2a3-f0cfe0181ee0`$data,simplifyDataFrame = T,flatten = T)
data171<-fromJSON(txt = data$`56e9a2da-6d92-40eb-af63-c1be702c4502`$data,simplifyDataFrame = T,flatten = T)
data172<-fromJSON(txt = data$`d3213fe7-91a1-4610-874e-da4f9e0e50e9`$data,simplifyDataFrame = T,flatten = T)
data173<-fromJSON(txt = data$`a47936fe-bf50-4dba-8afa-caa92243d15b`$data,simplifyDataFrame = T,flatten = T)
data174<-fromJSON(txt = data$`d99fcd89-b147-4201-bd56-d6f18f4dde33`$data,simplifyDataFrame = T,flatten = T)

data175<-fromJSON(txt = data$`1bcd2252-66e4-4a5f-a1d6-05d0dd9aab78`$data,simplifyDataFrame = T,flatten = T)
data176<-fromJSON(txt = data$`4450e8fc-0a6f-4f9a-bc02-5baf64797e95`$data,simplifyDataFrame = T,flatten = T)
data177<-fromJSON(txt = data$`4b493b25-6622-4872-b5e2-d355f126339d`$data,simplifyDataFrame = T,flatten = T)
data178<-fromJSON(txt = data$`4de74923-28b2-466e-81ce-36445f2f92ec`$data,simplifyDataFrame = T,flatten = T)
data179<-fromJSON(txt = data$`5aab96ac-dba1-48a3-af00-bc1c02693697`$data,simplifyDataFrame = T,flatten = T)
data180<-fromJSON(txt = data$`5e3a315e-812a-408c-945c-9a6e8f0a8c6a`$data,simplifyDataFrame = T,flatten = T)
data181<-fromJSON(txt = data$`77a53e31-d76b-4c73-8a18-dcccad34c615`$data,simplifyDataFrame = T,flatten = T)
data182<-fromJSON(txt = data$`85b9652d-55e1-43ef-999b-ca0597cbac0f`$data,simplifyDataFrame = T,flatten = T)
data183<-fromJSON(txt = data$`a1785941-f13e-4306-87a6-02f2896bfd9e`$data,simplifyDataFrame = T,flatten = T)
data184<-fromJSON(txt = data$`a3e95717-ca04-463c-8d34-74be68fc01a7`$data,simplifyDataFrame = T,flatten = T)
data185<-fromJSON(txt = data$`a46205cd-8924-4c76-9cf6-e7a2b9cd92d8`$data,simplifyDataFrame = T,flatten = T)
data186<-fromJSON(txt = data$`b5c0d095-a8eb-445e-82fe-940fad6dc365`$data,simplifyDataFrame = T,flatten = T)
data187<-fromJSON(txt = data$`cc986cff-e1c3-49ae-b2d5-6067de89c4d2`$data,simplifyDataFrame = T,flatten = T)
data188<-fromJSON(txt = data$`daadb4eb-a77d-4426-81a9-c727c5aa8caa`$data,simplifyDataFrame = T,flatten = T)
data189<-fromJSON(txt = data$`e8f330fd-6ed1-4e74-8392-51f04b0d496c`$data,simplifyDataFrame = T,flatten = T)
data190<-fromJSON(txt = data$`e91167a4-0a55-4ad4-8989-04e5cada6c39`$data,simplifyDataFrame = T,flatten = T)

#********************************************************Circle-Size-Experiment-2***************************#

data191<-fromJSON(txt = data$`2502899f-2a90-44cd-89ee-dd05e152085b`$data,simplifyDataFrame = T,flatten = T)
data192<-fromJSON(txt = data$`32f41e91-2e87-4c66-95ed-19d42890e3cc`$data,simplifyDataFrame = T,flatten = T)
data193<-fromJSON(txt = data$`423b53dd-ed45-4cfd-b5e6-7dd99be9cb70`$data,simplifyDataFrame = T,flatten = T)
data194<-fromJSON(txt = data$`603ab11e-d511-463f-a086-fea0d9500082`$data,simplifyDataFrame = T,flatten = T)
data195<-fromJSON(txt = data$`85cbfc54-82df-4de8-8c16-8f652e899520`$data,simplifyDataFrame = T,flatten = T)
data196<-fromJSON(txt = data$`8bd14a69-94b7-416f-8c54-6870b2fb3965`$data,simplifyDataFrame = T,flatten = T)
data197<-fromJSON(txt = data$`bedd021b-3b17-4c21-8d07-83d1126c9d9b`$data,simplifyDataFrame = T,flatten = T)
data198<-fromJSON(txt = data$`c0c8c3d8-42b3-4192-8b0b-5b4d228e6d66`$data,simplifyDataFrame = T,flatten = T)
data199<-fromJSON(txt = data$`ca448e46-8342-4b56-8061-ab3cee5910bb`$data,simplifyDataFrame = T,flatten = T)


#********************************************************Circle-Size-Experiment-2***************************#

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


Demographics <-head(data191[c("Participant_Consent", 
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
                                                         
Screen_Dim <- head(data191[c("meta.screen_width",	
                           "meta.screen_height",	
                           "meta.scroll_width",	
                           "meta.scroll_height",	
                           "meta.window_innerWidth",	
                           "meta.window_innerHeight",
                           "meta.devicePixelRatio"
                           )], n = 1000)

Condition <- head(data191[c("sender",
                          "duration",
                          "Horizontal_Pos",
                          "Vertical_Pos",
                          "P_Size_L",
                          "P_Size_R",
                          "P_Size",
                          "Position"
                          )], n = 1000)

xPos <-capture.output(data191["xpos"])
yPos <-capture.output(data191["ypos"])





write.csv(Demographics, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\Control\\P191/Demo.csv", row.names = FALSE)
write.csv(Condition, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\Control\\P191/Conditions.csv", row.names = FALSE)
write.csv(Screen_Dim, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\Control\\P191/Screen_Dim.csv", row.names = FALSE)
write.csv(xPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\Control\\P191/xPos.csv", row.names = FALSE)
write.csv(yPos, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\Control\\P191/yPos.csv", row.names = FALSE)




write.csv(P_data, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/P_data.csv", row.names = FALSE)
write.csv(timestamps, "C:\\Users\\Ryan Langridge\\Desktop\\Online Participant Data\\P9/timestamps.csv", row.names = FALSE)


#Trying to merge data.

library(writexl)
sheets <- list("xPos" = xPos, "yPos" = yPos) #assume sheet1 and sheet2 are data frames
write_xlsx(sheets, "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/yPos.csv")

library(xlsx)

write.xlsx(xPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="X_Pos", row.names=FALSE) #"C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos2.csv", row.names = FALSE)
write.xlsx(yPos, file = "C:\\Users\\Ryan Langridge\\Desktop\\Github\\Circle Size Experiment\\data\\P2/mouse_pos.xlsx", sheetName="Y_Pos", append=TRUE, row.names=FALSE)



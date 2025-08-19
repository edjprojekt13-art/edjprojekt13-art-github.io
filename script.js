// Data Awal Siswa, digunakan jika localStorage kosong.
const initialDataSiswa = {
    "12 LP": [{nis: "2324.10.1264", nama: "Alma Alini Saputri", jk: "P"}, {nis: "2324.10.1265", nama: "Amelia Putri M.D", jk: "P"}, {nis: "2324.10.1268", nama: "Dahlia", jk: "P"}, {nis: "2324.10.1269", nama: "Decha Destiani", jk: "P"}, {nis: "2324.10.1270", nama: "Diana", jk: "P"}, {nis: "2324.10.1271", nama: "Dimas Saputra", jk: "L"}, {nis: "2023.10.1273", nama: "Intan Riskawati", jk: "P"}, {nis: "2023.10.1274", nama: "Isqilah Khoerul Umah", jk: "P"}, {nis: "2023.10.1275", nama: "Laisa Apriyanti", jk: "P"}, {nis: "2023.10.1276", nama: "Lanlan", jk: "L"}, {nis: "2023.10.1277", nama: "Leni Astuti", jk: "P"}, {nis: "2023.10.1279", nama: "Moch.Reihan", jk: "L"}, {nis: "2023.10.1280", nama: "Naila Apriliani", jk: "P"}, {nis: "2023.10.1281", nama: "Nasya Herdiana Putri", jk: "P"}, {nis: "2023.10.1282", nama: "Nesa Alya Safitri", jk: "P"}, {nis: "2023.10.1283", nama: "Nila Nurmala", jk: "P"}, {nis: "2023.10.1288", nama: "Resiawati", jk: "P"}, {nis: "2023.10.1289", nama: "Riani Nurfadilah", jk: "P"}, {nis: "2023.10.1290", nama: "Riski Aulia", jk: "P"}, {nis: "2023.10.1291", nama: "Rizky Andri Maulana", jk: "L"}, {nis: "2023.10.1292", nama: "Seni Meylani", jk: "P"}, {nis: "2023.10.1293", nama: "Serli", jk: "P"}, {nis: "2324.11.1486", nama: "Siti Fatimah Syifa", jk: "P"}, {nis: "2023.10.1294", nama: "Siti Humaira Risma Wati", jk: "P"}, {nis: "2023.10.1295", nama: "Tasya Kamila", jk: "P"}, {nis: "2023.10.1296", nama: "Windi", jk: "P"}],
    "12 TKR": [{nis: "2324.10.1297", nama: "Akbar Maulana", jk: "L"}, {nis: "2324.10.1299", nama: "Bayu Rusdi Wijaya", jk: "L"}, {nis: "2324.10.1300", nama: "Eundi", jk: "L"}, {nis: "2324.10.1302", nama: "Faisal Alfaizi", jk: "L"}, {nis: "2324.10.1335", nama: "Farhad Aulia Sidiq", jk: "L"}, {nis: "2324.10.1303", nama: "Farhan Mudzoffar", jk: "L"}, {nis: "2324.10.1305", nama: "Ilham", jk: "L"}, {nis: "2324.11.1487", nama: "M. Galank Pratama", jk: "L"}, {nis: "2324.10.1306", nama: "M. Reyihan Maulana", jk: "L"}, {nis: "2324.10.1307", nama: "M. Riezuan Ibrahim Putra", jk: "L"}, {nis: "2324.10.1308", nama: "M. Ripal", jk: "L"}, {nis: "2324.10.1309", nama: "Muhamad Rizky Maulana", jk: "L"}, {nis: "2324.10.1310", nama: "Muhamad Sandi", jk: "L"}, {nis: "2324.10.1284", nama: "Pandu Krisnaldi", jk: "L"}, {nis: "2324.10.1287", nama: "Reinaldi Ade Putra", jk: "L"}, {nis: "2324.10.1311", nama: "Riski Ade Almiraj", jk: "L"}, {nis: "2324.11.1342", nama: "Rizki Firmansyah", jk: "L"}, {nis: "2324.10.1313", nama: "Tedi Maulana", jk: "L"}, {nis: "2324.10.1336", nama: "Topik", jk: "L"}, {nis: "2324.10.1315", nama: "Viter Herlambang", jk: "L"}],
    "12 RPL 1": [{nis: "2324.10.1207", nama: "Abdul Malik", jk: "L"}, {nis: "2324.10.1208", nama: "Ahwana Maulana", jk: "L"}, {nis: "2324.10.1209", nama: "Aldo Supardi", jk: "L"}, {nis: "2324.10.1210", nama: "Alfayiril Ramadan", jk: "L"}, {nis: "2324.10.1211", nama: "Alpin Dika Aulia", jk: "L"}, {nis: "2324.10.1212", nama: "Ariska Rahma Wati", jk: "P"}, {nis: "2324.10.1213", nama: "Bunga Aulia Nurplah", jk: "P"}, {nis: "2324.10.1214", nama: "Deden Suryana", jk: "L"}, {nis: "2324.10.1215", nama: "Didi Mardiana", jk: "L"}, {nis: "2324.10.1331", nama: "Dzanis Ginanjar", jk: "L"}, {nis: "2324.10.1217", nama: "Gia Moza Lestari", jk: "P"}, {nis: "2324.10.1218", nama: "Hudda Rodiyah Hartari", jk: "L"}, {nis: "2324.10.1219", nama: "Ikbal Maulana Rizki", jk: "L"}, {nis: "2324.10.1220", nama: "Ilma", jk: "P"}, {nis: "2324.10.1221", nama: "M.Dhika Syahputra", jk: "L"}, {nis: "2324.10.1222", nama: "M.Nur Alpin", jk: "L"}, {nis: "2324.10.1223", nama: "Malla", jk: "P"}, {nis: "2324.10.1224", nama: "Maura Puring Lisnawati", jk: "P"}, {nis: "2324.10.1225", nama: "Nur Salwa", jk: "P"}, {nis: "2324.10.1226", nama: "Pahri Akbar", jk: "L"}, {nis: "2324.10.1228", nama: "Reno Ronal", jk: "L"}, {nis: "2324.10.1229", nama: "Rika Ardila", jk: "P"}, {nis: "2324.10.1230", nama: "Saepul Gunawan", jk: "L"}, {nis: "2324.10.1231", nama: "Salwa safitri", jk: "P"}, {nis: "2324.10.1232", nama: "Siti Nuraeni", jk: "P"}, {nis: "2324.10.1233", nama: "Siti Zahro", jk: "P"}, {nis: "2324.10.1234", nama: "Zalpa Nurlaela", jk: "P"}],
    "12 RPL 2": [{nis: "2324.10.1235", nama: "Aji Santoso", jk: "L"}, {nis: "2324.10.1236", nama: "Ardiansyah", jk: "L"}, {nis: "2324.10.1237", nama: "Ariel Apriado", jk: "L"}, {nis: "2324.10.1238", nama: "Arif Rohman", jk: "L"}, {nis: "2324.10.1239", nama: "Aril Dimas Saputra", jk: "L"}, {nis: "2324.10.1240", nama: "Azril Apandi", jk: "L"}, {nis: "2324.10.1241", nama: "Bunga Lestari", jk: "P"}, {nis: "2324.10.1242", nama: "Deiz Herlangga", jk: "L"}, {nis: "2324.10.1243", nama: "Devin Andrea", jk: "L"}, {nis: "2425.11.1489", nama: "Dihyara El-Qolbi Ismatullah", jk: "L"}, {nis: "2324.10.1244", nama: "Eka Armawiria", jk: "P"}, {nis: "2324.10.1245", nama: "Eka Zilvia", jk: "P"}, {nis: "2324.10.1246", nama: "Elfani Ajeng Lutfiah", jk: "P"}, {nis: "2324.10.1247", nama: "Eneng Sarah", jk: "P"}, {nis: "2324.10.1248", nama: "Hergi Eka Putra Juniansyah", jk: "L"}, {nis: "2324.10.1249", nama: "Jesicka", jk: "P"}, {nis: "2324.10.1250", nama: "M Ziehad Alfazri", jk: "L"}, {nis: "2324.10.1251", nama: "M. Aris Nawawi", jk: "L"}, {nis: "2324.10.1252", nama: "Nurul Hikmah", jk: "P"}, {nis: "2324.10.1286", nama: "Piki", jk: "L"}, {nis: "2324.10.1253", nama: "Putra M.Saepul Hanan", jk: "L"}, {nis: "2324.10.1254", nama: "Putri Indah Lestari", jk: "P"}, {nis: "2324.10.1255", nama: "Rafi", jk: "L"}, {nis: "2324.10.1256", nama: "Ragil Maulana", jk: "L"}, {nis: "2324.10.1257", nama: "Rahman", jk: "L"}, {nis: "2324.10.1258", nama: "Rahmawati", jk: "P"}, {nis: "2324.10.1259", nama: "Rapsan Sahid", jk: "L"}, {nis: "2324.10.1227", nama: "Rayan Ramadhani", jk: "L"}, {nis: "2324.10.1260", nama: "Salwa Febriyanti", jk: "P"}, {nis: "2324.10.1261", nama: "Sindi Aulia", jk: "P"}, {nis: "2324.10.1262", nama: "Siti Lestari", jk: "P"}, {nis: "2324.10.1263", nama: "Zenal Arif", jk: "L"}],
    "12 DPB": [{nis: "2324.10.1316", nama: "Abdul Muiz", jk: "L"}, {nis: "2324.10.1317", nama: "Alsa", jk: "P"}, {nis: "2324.10.1267", nama: "Berliana", jk: "P"}, {nis: "2324.10.1272", nama: "Icha Risnawati", jk: "P"}, {nis: "2324.10.1320", nama: "Kaliza Destriani", jk: "P"}, {nis: "2324.10.1321", nama: "Latifahtu Khairiah", jk: "P"}, {nis: "2324.10.1337", nama: "Parid Pratama", jk: "L"}, {nis: "2324.10.1323", nama: "Perdi Nurohman", jk: "L"}, {nis: "2324.10.1343", nama: "Putri Lestari", jk: "P"}, {nis: "2324.10.1324", nama: "Rismiati", jk: "P"}, {nis: "2324.10.1325", nama: "Sajid", jk: "L"}, {nis: "2324.10.1326", nama: "Salma Susanto", jk: "P"}, {nis: "2324.10.1332", nama: "Shabrina", jk: "P"}, {nis: "2324.10.1327", nama: "Siti Anida Putri Agustian", jk: "P"}, {nis: "2324.10.1328", nama: "Siti Fadilah", jk: "P"}, {nis: "2324.10.1329", nama: "Tesa", jk: "P"}],
    "11 RPL 1": [{nis: "2425.10.1345", nama: "ADIYANSYAH", jk: "L"}, {nis: "2425.10.1346", nama: "ALDI MUHAMMAD SHANDI", jk: "L"}, {nis: "2425.10.1347", nama: "ANDIKA PRATAMA", jk: "L"}, {nis: "2425.10.1348", nama: "ANDRI YANSYAH", jk: "L"}, {nis: "2425.10.1349", nama: "ANTENG SRI LESTARI", jk: "P"}, {nis: "2425.10.1350", nama: "EVA MAULIDA", jk: "P"}, {nis: "2425.10.1351", nama: "FAISAL RIZKI FARSA", jk: "L"}, {nis: "2425.10.1352", nama: "INA PEBRIANI", jk: "P"}, {nis: "2425.10.1353", nama: "JESSICA MAHARANI", jk: "P"}, {nis: "2425.10.1354", nama: "KAYANA RAISA PUTRA", jk: "P"}, {nis: "2425.10.1355", nama: "KUMARUL RIFA", jk: "L"}, {nis: "2425.10.1356", nama: "LATISA AMALIA", jk: "P"}, {nis: "2425.10.1357", nama: "M ABDIELAH HERDIANA HERDIANSYAH", jk: "L"}, {nis: "2425.10.1358", nama: "MARSA", jk: "P"}, {nis: "2425.10.1359", nama: "MUHAMAD FAHRI PRATAMA", jk: "L"}, {nis: "2425.10.1361", nama: "MUHAMMAD ABDUL LATIF", jk: "L"}, {nis: "2425.10.1362", nama: "MUHAMMAD RAFIL APRILIANTO", jk: "L"}, {nis: "2425.10.1363", nama: "NIZAR FIRMAN HIDAYAT", jk: "L"}, {nis: "2425.10.1364", nama: "PASKAL ALPARADO DASTIAN", jk: "L"}, {nis: "2425.10.1365", nama: "RADIT YUSUF MAULANA SUSANTO", jk: "L"}, {nis: "2425.10.1366", nama: "REGI A MAULANA", jk: "L"}, {nis: "2425.10.1367", nama: "RENDI", jk: "L"}, {nis: "2425.10.1368", nama: "RIMA MIATI FAUZI", jk: "P"}, {nis: "2425.10.1369", nama: "RIPAL PEBRIANA", jk: "L"}, {nis: "2425.10.1370", nama: "RISDA AMELIA", jk: "P"}, {nis: "2425.10.1371", nama: "SILVIANI SAFITRI", jk: "P"}, {nis: "2425.10.1372", nama: "SISKA NURHASANAH", jk: "P"}, {nis: "2425.10.1373", nama: "SOHIPA", jk: "P"}, {nis: "2425.10.1374", nama: "TINA TALISA", jk: "P"}, {nis: "2425.10.1375", nama: "WENDI RAMADHANI", jk: "L"}],
    "11 RPL 2": [{nis: "2425.10.1376", nama: "ABDUL MUIZ", jk: "L"}, {nis: "2425.10.1377", nama: "ADITIA", jk: "L"}, {nis: "2425.10.1378", nama: "ALIF AMRILAH", jk: "L"}, {nis: "2425.10.1379", nama: "ARIS SUPRIATMAN", jk: "L"}, {nis: "2425.10.1380", nama: "ASEP LENDRA", jk: "L"}, {nis: "2425.10.1381", nama: "AULIA HAFIZAH", jk: "P"}, {nis: "2425.10.1382", nama: "AYU HERMAWAN", jk: "P"}, {nis: "2425.10.1383", nama: "CHANTIKA LUSIANA DEWI", jk: "P"}, {nis: "2425.10.1384", nama: "DHILAL MULTAZAM", jk: "L"}, {nis: "2425.10.1385", nama: "DIMAS APRILIAN NUGRAHA", jk: "L"}, {nis: "2425.10.1386", nama: "FIKRI ALFARIZI", jk: "L"}, {nis: "2425.10.1387", nama: "GUNTUR PADILAH", jk: "L"}, {nis: "2425.10.1388", nama: "M FARIDZ ALBAHRI", jk: "L"}, {nis: "2425.10.1389", nama: "M. SOLAHUDIN NURARIPIN", jk: "L"}, {nis: "2425.10.1390", nama: "M.RIFKI", jk: "L"}, {nis: "2425.10.1391", nama: "MEISKA CAHAYA RAHAYU", jk: "P"}, {nis: "2425.10.1392", nama: "MOCH. KHALID AR-RAHMAN", jk: "L"}, {nis: "2425.10.1393", nama: "MUHAMAD FAIQ AYUBI", jk: "L"}, {nis: "2425.10.1394", nama: "MUHAMAD IRFAN", jk: "L"}, {nis: "2425.10.1395", nama: "MUHAMMAD ELPAN MAULANA", jk: "L"}, {nis: "2425.10.1396", nama: "MUHAMMAD REVANJAELANI", jk: "L"}, {nis: "2425.10.1397", nama: "NENG INTAN NURRIZQIA", jk: "P"}, {nis: "2425.10.1398", nama: "NUR SYIFA AINI", jk: "P"}, {nis: "2425.10.1399", nama: "RAENALDO", jk: "L"}, {nis: "2425.10.1400", nama: "RAISYA MEISYARA", jk: "P"}, {nis: "2425.10.1401", nama: "RENAL MAULANA", jk: "L"}, {nis: "2425.10.1402", nama: "RENALDY DRAJAT PRANAJAYA", jk: "L"}, {nis: "2425.10.1403", nama: "REPAN", jk: "L"}, {nis: "2425.10.1404", nama: "SALVA RAMADHANI", jk: "P"}, {nis: "2425.10.1405", nama: "SYIFA ALENA PUTRI", jk: "P"}, {nis: "2425.10.1406", nama: "TOPAN GRUDA TEJO SANDHYKA", jk: "L"}, {nis: "2425.10.1407", nama: "VINA JULIANTI", jk: "P"}],
    "11 DPB": [{nis: "2425.10.1408", nama: "ALBA", jk: "L"}, {nis: "2425.10.1409", nama: "ANDRE MAULANA", jk: "L"}, {nis: "2425.10.1410", nama: "DHIYA MAULIDA", jk: "P"}, {nis: "2425.10.1411", nama: "ETIKA LESWATI", jk: "P"}, {nis: "2425.10.1412", nama: "EVA ZAKIYAH", jk: "P"}, {nis: "2425.10.1413", nama: "HANNIYA CHANTIKA J", jk: "P"}, {nis: "2425.10.1414", nama: "KESSYA TANTRI", jk: "P"}, {nis: "2425.10.1415", nama: "KHUTBIATUN NISAROPAH", jk: "P"}, {nis: "2425.10.1416", nama: "NAJWA HUSWATUN H", jk: "P"}, {nis: "2425.10.1417", nama: "NAZMA SRI MALA", jk: "P"}, {nis: "2425.10.1419", nama: "PEBYA SUDARMAN", jk: "P"}, {nis: "2425.10.1420", nama: "RESTI", jk: "P"}, {nis: "2425.10.1421", nama: "RIO APRRIANSAH", jk: "L"}, {nis: "2425.10.1422", nama: "SALSA SABILA", jk: "P"}, {nis: "2425.10.1424", nama: "SITI NUR AMALIA", jk: "P"}, {nis: "2425.10.1425", nama: "SYIFA DIAH MAULIYANA", jk: "P"}, {nis: "2425.10.1426", nama: "TIA HARYATI", jk: "P"}, {nis: "2425.10.1427", nama: "YOSI", jk: "P"}, {nis: "2425.10.1428", nama: "ZAHRA MAULIDA", jk: "P"}],
    "11 TKR": [{nis: "2425.10.1429", nama: "ALBAR YUSUF", jk: "L"}, {nis: "2425.10.1431", nama: "ANDRA RADITTIA", jk: "L"}, {nis: "2425.10.1432", nama: "ANGGI", jk: "L"}, {nis: "2425.10.1433", nama: "ANGGI SAPUTRA", jk: "L"}, {nis: "2425.10.1434", nama: "FAHRI ALMAIZ", jk: "L"}, {nis: "2425.10.1435", nama: "FAJAR KIAN", jk: "L"}, {nis: "2425.10.1436", nama: "FAKHRI YUSUF HAIDAR", jk: "L"}, {nis: "2425.10.1437", nama: "FAUZAN TRI SURYA SAPUTRA", jk: "L"}, {nis: "2425.10.1438", nama: "IRGI DIAN SAPUTRA", jk: "L"}, {nis: "2425.10.1439", nama: "M AGIS", jk: "L"}, {nis: "2425.10.1440", nama: "M ALPIAN", jk: "L"}, {nis: "2425.10.1441", nama: "M PAHMI", jk: "L"}, {nis: "2425.10.1442", nama: "M. PIKRI", jk: "L"}, {nis: "2425.10.1443", nama: "M.MANSHUR", jk: "L"}, {nis: "2425.10.1444", nama: "MAHESA SAPUTRA", jk: "L"}, {nis: "2425.10.1445", nama: "MOCH ERLANGGA", jk: "L"}, {nis: "2425.10.1446", nama: "MOH RIZKY ALFHARIZ FAISAL IDRIS", jk: "L"}, {nis: "2425.10.1484", nama: "MUHAMAD RAFI RUSTIAWAN", jk: "L"}, {nis: "2425.10.1448", nama: "MUHAMMAD AKBIL", jk: "L"}, {nis: "2425.10.1449", nama: "PANDI", jk: "L"}, {nis: "2425.10.1450", nama: "RAFKA ADI PERMANA", jk: "L"}, {nis: "2425.10.1451", nama: "RAHIL MAULANA AWALI", jk: "L"}, {nis: "2425.10.1452", nama: "RENDI", jk: "L"}, {nis: "2425.10.1453", nama: "RIPAL", jk: "L"}, {nis: "2425.10.1454", nama: "SUHERLI RAMA DANI", jk: "L"}, {nis: "2425.10.1455", nama: "SURYA BUDI PRATAMA", jk: "L"}, {nis: "2425.10.1456", nama: "SUSILO", jk: "L"}],
    "10 TKR 1": [{nis: "2526.10.1608", nama: "Abdul Aziz", jk: "L"}, {nis: "2526.10.1609", nama: "Abdul Hilman", jk: "L"}, {nis: "2526.10.1610", nama: "Aden Juminta", jk: "L"}, {nis: "2526.10.1611", nama: "Afrijal", jk: "L"}, {nis: "2526.10.1612", nama: "Aldo Sutisno", jk: "L"}, {nis: "2526.10.1613", nama: "Andika Pratama", jk: "L"}, {nis: "2526.10.1614", nama: "Andrean", jk: "L"}, {nis: "2526.10.1615", nama: "Daud Atohillah", jk: "L"}, {nis: "2526.10.1616", nama: "Diaz Aditya", jk: "L"}, {nis: "2526.10.1617", nama: "Faisal Nurhayat", jk: "L"}, {nis: "2526.10.1618", nama: "M. Dzikri Fadilah", jk: "L"}, {nis: "2526.10.1619", nama: "Muhamad Aldiansyah", jk: "L"}, {nis: "2526.10.1620", nama: "Muhamad Kholiq Abdul Kiram", jk: "L"}, {nis: "2526.10.1621", nama: "Muhamad Saepul Kamal", jk: "L"}, {nis: "2526.10.1622", nama: "Pasa", jk: "L"}, {nis: "2526.10.1623", nama: "Raffa Tubagus Sulistio", jk: "L"}, {nis: "2526.10.1624", nama: "Ratu Tashi", jk: "P"}, {nis: "2526.10.1625", nama: "Rayi Suwandi", jk: "L"}, {nis: "2526.10.1626", nama: "Rehan", jk: "L"}, {nis: "2526.10.1627", nama: "Reyhan", jk: "L"}, {nis: "2526.10.1628", nama: "Riski Andriyan", jk: "L"}, {nis: "2526.10.1629", nama: "Rizqi Raditia", jk: "L"}, {nis: "2526.10.1630", nama: "Vikri Maulana Yusuf", jk: "L"}],
    "10 DPB": [{nis: "2526.10.1491", nama: "Alfatir Fatara", jk: "L"}, {nis: "2526.10.1492", nama: "Alvi Nelani Putri", jk: "P"}, {nis: "2526.10.1493", nama: "Amelia", jk: "P"}, {nis: "2526.10.1494", nama: "Azka Aulia", jk: "P"}, {nis: "2526.10.1495", nama: "Bonita Susanto", jk: "P"}, {nis: "2526.10.1496", nama: "Celyn Al Ismi", jk: "P"}, {nis: "2526.10.1497", nama: "Dewi Rosita Puspitasari", jk: "P"}, {nis: "2526.10.1498", nama: "Haikal Prandani", jk: "L"}, {nis: "2526.10.1499", nama: "Muhamad Fadhil Ramdani", jk: "L"}, {nis: "2526.10.1500", nama: "Muhamad Muklis Pahmi", jk: "L"}, {nis: "2526.10.1501", nama: "Muhamad Wildan", jk: "L"}, {nis: "2526.10.1502", nama: "Nabil Anggara Putra", jk: "L"}, {nis: "2526.10.1503", nama: "Noviana Dewi", jk: "P"}, {nis: "2526.10.1504", nama: "Nurul Fauziyah", jk: "P"}, {nis: "2526.10.1505", nama: "Paisal Mauala", jk: "L"}, {nis: "2526.10.1506", nama: "Radit Alfarizy", jk: "L"}, {nis: "2526.10.1507", nama: "Rayyan Khallid", jk: "L"}, {nis: "2526.10.1508", nama: "Salsabil Fitri", jk: "P"}, {nis: "2526.10.1509", nama: "Shaskia Raydinata Agustian", jk: "P"}, {nis: "2526.10.1510", nama: "Sintia Wulansa Purnama", jk: "P"}, {nis: "2526.10.1511", nama: "Siti Nabila", jk: "P"}, {nis: "2526.10.1512", nama: "Siti Rosidah", jk: "P"}],
    "10 RPL 1": [{nis: "2526.10.1547", nama: "Aditya Zian Pangestu", jk: "L"}, {nis: "2526.10.1548", nama: "Afrijal", jk: "L"}, {nis: "2526.10.1549", nama: "Ai Rohimatul M", jk: "P"}, {nis: "2526.10.1550", nama: "Aldi", jk: "L"}, {nis: "2526.10.1551", nama: "Aldi Nur Falah", jk: "L"}, {nis: "2526.10.1552", nama: "Alif Imam Rojak", jk: "L"}, {nis: "2526.10.1553", nama: "Bagas Rizki Wanggeni", jk: "L"}, {nis: "2526.10.1554", nama: "Elsa", jk: "P"}, {nis: "2526.10.1555", nama: "Gibran Qais Ramadhan", jk: "L"}, {nis: "2526.10.1556", nama: "Jihan Lestari", jk: "P"}, {nis: "2526.10.1557", nama: "Kahfi Alam", jk: "L"}, {nis: "2526.10.1558", nama: "Karisma", jk: "P"}, {nis: "2526.10.1559", nama: "M. Abdul Muiz", jk: "L"}, {nis: "2526.10.1560", nama: "M. Fajar Hamdani", jk: "L"}, {nis: "2526.10.1561", nama: "M. Hifdzy Nur Awal", jk: "L"}, {nis: "2526.10.1562", nama: "M. Hilal", jk: "L"}, {nis: "2526.10.1563", nama: "Marsya Denita", jk: "P"}, {nis: "2526.10.1564", nama: "Muhamad Idris Maulana", jk: "L"}, {nis: "2526.10.1565", nama: "Muhamad Ihsan", jk: "L"}, {nis: "2526.10.1566", nama: "Muhamad Ilham", jk: "L"}, {nis: "2526.10.1567", nama: "Nanda Septian", jk: "L"}, {nis: "2526.10.1568", nama: "Nuril Azhari", jk: "L"}, {nis: "2526.10.1569", nama: "Raden Muhamad Fadlan Putra Yulia", jk: "L"}, {nis: "2526.10.1570", nama: "Radja Rayhan Eka Setibudi", jk: "L"}, {nis: "2526.10.1571", nama: "Raja. M Parhan", jk: "L"}, {nis: "2526.10.1572", nama: "Ramadhan Pratama", jk: "L"}, {nis: "2526.10.1573", nama: "Rapi Maulana Sahid", jk: "L"}, {nis: "2526.10.1574", nama: "Resti Melani", jk: "P"}, {nis: "2526.10.1575", nama: "Safana Susanto", jk: "P"}, {nis: "2526.10.1576", nama: "Sri Andini", jk: "P"}, {nis: "2526.10.1577", nama: "Teguh Dafa Oktaviana", jk: "L"}],
    "10 RPL 2": [{nis: "2526.10.1578", nama: "Abdul Satrio", jk: "L"}, {nis: "2526.10.1579", nama: "Aden Permana Hidayatuloh", jk: "L"}, {nis: "2526.10.1580", nama: "Adis Al Gojali", jk: "L"}, {nis: "2526.10.1582", nama: "Bayu Sukma", jk: "L"}, {nis: "2526.10.1583", nama: "Dimas", jk: "L"}, {nis: "2526.10.1584", nama: "Gun Gun", jk: "L"}, {nis: "2526.10.1585", nama: "Hanifah", jk: "P"}, {nis: "2526.10.1586", nama: "Kayla", jk: "P"}, {nis: "2526.10.1587", nama: "Langit Saputra", jk: "L"}, {nis: "2526.10.1588", nama: "M. Aditia Ramadhani", jk: "L"}, {nis: "2526.10.1589", nama: "M. Rangga Jaya Sakti", jk: "L"}, {nis: "2526.10.1590", nama: "M. Rijal Alpiansyah", jk: "L"}, {nis: "2526.10.1591", nama: "M. Rizki. Hamdani", jk: "L"}, {nis: "2526.10.1592", nama: "M. Rizwan", jk: "L"}, {nis: "2526.10.1593", nama: "Malikal Mulki", jk: "L"}, {nis: "2526.10.1594", nama: "Monica", jk: "P"}, {nis: "2526.10.1595", nama: "Muhamad Ramadan", jk: "L"}, {nis: "2526.10.1596", nama: "Muhamad Rizki Ramdani", jk: "L"}, {nis: "2526.10.1597", nama: "Muhamad Sirojushibiyan", jk: "L"}, {nis: "2526.10.1598", nama: "Naila Hayati", jk: "P"}, {nis: "2526.10.1599", nama: "Nurfa Dwi Rahayu", jk: "P"}, {nis: "2526.10.1600", nama: "Raden Muhamad Fadly Putra Yulia", jk: "L"}, {nis: "2526.10.1601", nama: "Ratna Mustika", jk: "P"}, {nis: "2526.10.1602", nama: "Reza", jk: "L"}, {nis: "2526.10.1603", nama: "Risandi", jk: "L"}, {nis: "2526.10.1604", nama: "Sahar Maesandi", jk: "P"}, {nis: "2526.10.1605", nama: "Syalwa Mahesa", jk: "P"}, {nis: "2526.10.1606", nama: "Vikri Risal Gianto", jk: "L"}, {nis: "2526.10.1607", nama: "Yasir Nurfalah", jk: "L"}, {nis: "2526.10.1581", nama: "Aulia Meilinda Saptiani", jk: "P"}],
    "10 LP": [{nis: "2526.10.1513", nama: "Abdul Aziz", jk: "L"}, {nis: "2526.10.1514", nama: "Ahmad Khusaery", jk: "P"}, {nis: "2526.10.1515", nama: "Aisyah Nur Azzahra", jk: "P"}, {nis: "2526.10.1516", nama: "Arif Rahman Efendi", jk: "L"}, {nis: "2526.10.1517", nama: "Asti dea astuti", jk: "P"}, {nis: "2526.10.1518", nama: "Aulia Rahmawati", jk: "P"}, {nis: "2526.10.1519", nama: "Ayu Sri Mulyani", jk: "P"}, {nis: "2526.10.1520", nama: "Dana Mustakim", jk: "L"}, {nis: "2526.10.1521", nama: "Denis", jk: "L"}, {nis: "2526.10.1522", nama: "Eriska", jk: "P"}, {nis: "2526.10.1523", nama: "Fuji Marwah", jk: "P"}, {nis: "2526.10.1524", nama: "Gesha Maryamah", jk: "P"}, {nis: "2526.10.1525", nama: "Hafiz Al Aslah", jk: "L"}, {nis: "2526.10.1526", nama: "Intan Syahrini", jk: "P"}, {nis: "2526.10.1527", nama: "Kiki Sukirah", jk: "P"}, {nis: "2526.10.1528", nama: "M. Abia R.", jk: "L"}, {nis: "2526.10.1529", nama: "M. Habib Gib Al Tariq Warsa Sudarmono", jk: "L"}, {nis: "2526.10.1530", nama: "Muhamad Alip Nur Arafah", jk: "L"}, {nis: "2526.10.1531", nama: "Najwa Khoerunisa", jk: "P"}, {nis: "2526.10.1532", nama: "Neng Melani", jk: "P"}, {nis: "2526.10.1533", nama: "Neng Silva Oktavia", jk: "L"}, {nis: "2526.10.1534", nama: "Nova Agustina", jk: "P"}, {nis: "2526.10.1535", nama: "Reihan Abdullah Fauzy", jk: "L"}, {nis: "2526.10.1536", nama: "Reza Irawan", jk: "L"}, {nis: "2526.10.1537", nama: "Satria Fuji", jk: "L"}, {nis: "2526.10.1538", nama: "Seli Rahmawati", jk: "P"}, {nis: "2526.10.1539", nama: "Shipa Pebriana", jk: "P"}, {nis: "2526.10.1540", nama: "Siska Yusvita Sari", jk: "P"}, {nis: "2526.10.1541", nama: "Siswa Tanpa Nama", jk: "P"}, {nis: "2526.10.1542", nama: "Siti Rismawati", jk: "P"}, {nis: "2526.10.1543", nama: "Siti Sarah", jk: "P"}, {nis: "2526.10.1544", nama: "Sri Sanjani", jk: "P"}, {nis: "2526.10.1545", nama: "Tiara Alika Sari", jk: "P"}, {nis: "2526.10.1546", nama: "Vina Sri Ripian", jk: "P"}],
    "11 LP": [{nis: "95812433", nama: "Adil Lesmana", jk: "L"}, {nis: "93185740", nama: "Albi Alfarizki", jk: "L"}, {nis: "93285083", nama: "Anisa Restiana", jk: "P"}, {nis: "99254083", nama: "Balqis Elani Najwansa", jk: "P"}, {nis: "97839766", nama: "Dewi Sulastri", jk: "P"}, {nis: "87350053", nama: "Diva Aura Nursyapira", jk: "P"}, {nis: "95812404", nama: "Eneng Siti Latipah", jk: "P"}, {nis: "3091362147", nama: "Eneng Zahra Maulida", jk: "P"}, {nis: "3093540408", nama: "Farida Juliani", jk: "P"}, {nis: "3093549008", nama: "Felisha Putri Aula Dini", jk: "P"}, {nis: "90207120", nama: "Gina Astia Valentina", jk: "P"}, {nis: "91294174", nama: "Haifa Ayuni Zahra", jk: "P"}, {nis: "3091722668", nama: "Keyla Masya Andiani", jk: "P"}, {nis: "833131496", nama: "M. Farhan", jk: "L"}, {nis: "308230203", nama: "M. Fauzan Saputra", jk: "L"}, {nis: "5685540408", nama: "Meiski Cahaya Darmawan", jk: "P"}, {nis: "8685166", nama: "Muhammad Restu Nurjaman", jk: "L"}, {nis: "96840454", nama: "Neng Astri", jk: "P"}, {nis: "82314415", nama: "Neng Siti Rahayu", jk: "P"}, {nis: "97442647", nama: "Nur Lianda", jk: "P"}, {nis: "81454451", nama: "Nurma I", jk: "P"}, {nis: "81207914", nama: "Nurma M.", jk: "P"}, {nis: "3070198047", nama: "Pirdan", jk: "L"}, {nis: "82335357", nama: "Rania Sri Zalfa", jk: "P"}, {nis: "308027756", nama: "Shakira Farely Zalianty", jk: "P"}, {nis: "308028330", nama: "Siti Nabila", jk: "P"}, {nis: "91125140", nama: "Siva Siti Fatimah", jk: "P"}, {nis: "912912950", nama: "Rafi Ariansyah Putra", jk: "L"}, {nis: "235", nama: "Alda Aulia", jk: "P"}]
};

// Memuat data dari localStorage. Jika tidak ada, gunakan data awal.
let dataSiswa = JSON.parse(localStorage.getItem('dataSiswa')) || initialDataSiswa;
let dataAbsensi = JSON.parse(localStorage.getItem('dataAbsensi')) || {};
let dataNilai = JSON.parse(localStorage.getItem('dataNilai')) || {};
let dataMateri = JSON.parse(localStorage.getItem('dataMateri')) || {};
let dataRpp = JSON.parse(localStorage.getItem('dataRpp')) || [];
let dataJadwal = JSON.parse(localStorage.getItem('dataJadwal')) || {};
let dataArsip = JSON.parse(localStorage.getItem('dataArsip')) || [{id: 1, name: "Contoh Dokumen Kurikulum", link: "https://docs.google.com/document/d/123456789"}, {id: 2, name: "Materi Pembelajaran Bab 2", link: "https://docs.google.com/presentation/d/987654321"}];
let dataKalender = JSON.parse(localStorage.getItem('dataKalender')) || {};
let dataProfil = JSON.parse(localStorage.getItem('dataProfil')) || {
    sekolah: {
        nama: "SMKS JAYA",
        alamat: "Jl. Pangsor Sinaresmi Palabuhanratu",
        kepsek: "Andriyana, S.Pd.I. "
    },
    guru: {
        nama: "D. Ervan Fauzan, S.Sos, Gr.",
        nip: "198012012005011001",
        bidang: "Pendidikan Pancasila"
    }
};

let kehadiranChart;
let currentAdministrasiSubMenu = 'rpp';
let jadwalHistory = []; // For undo functionality

// --- Sidebar and Navigation ---

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('bg-blue-600', 'text-white', 'shadow-md');
        button.classList.add('text-gray-600', 'hover:bg-gray-100');
    });
    
    const activeContent = document.getElementById(`content-${tabName}`);
    const activeButton = document.getElementById(`tab-${tabName}`);
    activeContent.classList.remove('hidden');
    activeButton.classList.add('bg-blue-600', 'text-white', 'shadow-md');
    activeContent.classList.add('fade-in');

    loadTabContent(tabName);

    if (window.innerWidth < 768) {
        toggleSidebar();
    }
}

// --- Perbaikan Utama: Logika pemuatan konten tab diperbaiki ---
function loadTabContent(tabName) {
    const container = document.getElementById(`content-${tabName}`);
    
    // Cek apakah konten sudah ada. Jika sudah ada dan BUKAN tab dinamis, lewati pemuatan ulang.
    const isContentLoaded = container.innerHTML.trim() !== '';
    const dynamicTabs = ['dashboard', 'manajemen', 'rekap', 'administrasi', 'setting'];
    if (isContentLoaded && !dynamicTabs.includes(tabName)) {
         return; // Hanya keluar untuk tab statis seperti Absensi dan Penilaian
    }

    let html = '';
    // Switch statement untuk menghasilkan HTML berdasarkan nama tab
    switch(tabName) {
        case 'dashboard':
            html = `<div class="bg-white rounded-2xl shadow-xl p-6 mb-6"><div class="flex items-center justify-between flex-wrap gap-4 mb-6"><div><h2 class="text-2xl font-bold text-gray-800 mb-2">Dashboard Statistik</h2><p class="text-gray-600">Ringkasan visual kehadiran dan nilai</p></div><select id="dashboardKelas" class="px-4 py-2 border rounded-lg"><option value="">Pilih Kelas</option></select></div><div id="dashboardContent" class="space-y-6"><div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">📈</div><p>Pilih kelas untuk menampilkan statistik</p></div></div></div>`;
            break;
        case 'rekap':
            html = `<div class="bg-white rounded-2xl shadow-xl p-6">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">Rekap Kehadiran & Laporan</h2>
                        <p class="text-gray-600">Lihat statistik kehadiran, nilai, dan cetak laporan</p>
                    </div>
                    <div class="flex flex-col md:flex-row gap-3">
                        <div class="flex flex-col">
                            <label for="rekapStartDate" class="text-sm text-gray-600">Dari Tanggal:</label>
                            <input type="date" id="rekapStartDate" class="px-4 py-2 border border-gray-300 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label for="rekapEndDate" class="text-sm text-gray-600">Sampai Tanggal:</label>
                            <input type="date" id="rekapEndDate" class="px-4 py-2 border border-gray-300 rounded-lg">
                        </div>
                        <div class="flex flex-col">
                            <label class="text-sm text-gray-600 invisible">.</label>
                            <select id="rekapKelas" class="h-10 px-4 py-2 border border-gray-300 rounded-lg">
                                <option value="">Pilih Kelas</option>
                            </select>
                        </div>
                        <div class="flex flex-col">
                            <label for="rekapSearch" class="text-sm text-gray-600">Cari Siswa:</label>
                            <input type="text" id="rekapSearch" placeholder="Cari nama..." class="h-10 px-4 py-2 border rounded-lg">
                        </div>
                    </div>
                </div>
                <div class="flex flex-wrap gap-4 justify-end mb-6">
                    <button onclick="cetakLaporan()" class="h-10 bg-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors">🖨️ Cetak Laporan</button>
                    <button onclick="exportToExcel()" class="h-10 bg-teal-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-600 transition-colors">📥 Export Excel</button>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border"><p class="text-green-600 text-sm font-medium">Total Hadir</p><p id="totalHadir" class="text-2xl font-bold text-green-700">0</p></div>
                    <div class="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl border"><p class="text-yellow-600 text-sm font-medium">Total Sakit</p><p id="totalSakit" class="text-2xl font-bold text-yellow-700">0</p></div>
                    <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border"><p class="text-blue-600 text-sm font-medium">Total Izin</p><p id="totalIzin" class="text-2xl font-bold text-blue-700">0</p></div>
                    <div class="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border"><p class="text-red-600 text-sm font-medium">Total Alpa</p><p id="totalAlpa" class="text-2xl font-bold text-red-700">0</p></div>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-4">Rekapitulasi Kehadiran Per Siswa</h3>
                <div class="overflow-x-auto mb-8">
                    <table class="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="p-3 text-left text-sm font-medium">No</th>
                                <th class="p-3 text-left text-sm font-medium">Nama</th>
                                <th class="p-3 text-center text-sm font-medium">H</th>
                                <th class="p-3 text-center text-sm font-medium">S</th>
                                <th class="p-3 text-center text-sm font-medium">I</th>
                                <th class="p-3 text-center text-sm font-medium">A</th>
                                <th class="p-3 text-center text-sm font-medium">%</th>
                            </tr>
                        </thead>
                        <tbody id="rekapTable"></tbody>
                    </table>
                </div>
                <div id="laporanPreview" class="border rounded-lg p-6 bg-gray-50 mt-8">
                    <div class="text-center text-gray-500 py-8">
                        <div class="text-4xl mb-3">📄</div>
                        <p>Pilih kelas dan rentang tanggal untuk preview laporan</p>
                    </div>
                </div>
            </div>`;
            break;
        case 'manajemen':
            html = `<div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Manajemen Siswa</h2>
                <p class="text-gray-600 mb-4">Tambahkan, edit, atau hapus data siswa.</p>
                <div class="bg-gray-50 p-6 rounded-xl border mb-6">
                    <h3 class="text-xl font-semibold mb-4">Tambah Siswa Baru</h3>
                    <form id="addStudentForm" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                        <div>
                            <label for="newKelas" class="block text-sm font-medium">Kelas</label>
                            <select id="newKelas" name="kelas" class="mt-1 block w-full p-2 border rounded-md"></select>
                        </div>
                        <div>
                            <label for="newNama" class="block text-sm font-medium">Nama Siswa</label>
                            <input type="text" id="newNama" name="nama" class="mt-1 block w-full p-2 border rounded-md" required>
                        </div>
                        <div>
                            <label for="newJk" class="block text-sm font-medium">Jenis Kelamin</label>
                            <select id="newJk" name="jk" class="mt-1 block w-full p-2 border rounded-md" required>
                                <option value="">Pilih</option>
                                <option value="L">Laki-laki</option>
                                <option value="P">Perempuan</option>
                            </select>
                        </div>
                        <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium">➕ Tambah Siswa</button>
                    </form>
                </div>
                <div class="mt-6">
                    <h3 class="text-xl font-semibold mb-4">Daftar Siswa Per Kelas</h3>
                    <select id="manajemenKelas" class="px-4 py-2 border rounded-lg mb-4">
                        <option value="">Pilih Kelas untuk Manajemen</option>
                    </select>
                    <div id="manajemenTableContainer" class="overflow-x-auto">
                        <div class="text-center text-gray-500 py-8">
                            <div class="text-4xl mb-3">🧑‍🎓</div>
                            <p>Pilih kelas untuk mengelola data siswa</p>
                        </div>
                    </div>
                </div>
            </div>`;
            break;
        case 'administrasi':
            loadAdministrasiTabContent(currentAdministrasiSubMenu);
            return; // Fungsi administrasi akan menangani HTML-nya sendiri
        case 'setting':
            html = `<div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">Pengaturan Sistem</h2>
                
                <div class="bg-gray-50 p-6 rounded-xl border mb-6">
                    <h3 class="text-xl font-semibold mb-2">Tentang Sistem</h3>
                    <p class="text-gray-600 mb-4">Sistem Informasi Manajemen Guru (SIM G) ini dirancang untuk membantu guru mengelola absensi, nilai, dan administrasi pembelajaran secara digital. Semua data disimpan secara lokal di browser Anda. Anda bisa mencadangkan data ke file JSON dan memulihkannya kapan saja.</p>
                </div>

                <div class="bg-gray-50 p-6 rounded-xl border mb-6">
                    <h3 class="text-xl font-semibold mb-2">Manajemen Data Keseluruhan</h3>
                    <p class="text-gray-600 mb-4">Cadangkan atau pulihkan semua data (siswa, absensi, nilai, RPP, jadwal, dll.) dalam satu file.</p>
                    <div class="flex flex-col md:flex-row gap-4 items-center">
                        <button onclick="exportData()" class="bg-teal-500 text-white px-6 py-3 rounded-lg font-medium">📥 Ekspor Semua Data</button>
                        <div class="flex items-center gap-2 flex-wrap">
                            <label for="importFile" class="bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium cursor-pointer">📂 Pilih File Impor</label>
                            <input type="file" id="importFile" accept="application/json" class="hidden">
                            <span id="fileName" class="text-gray-600"></span>
                            <button onclick="importData()" class="bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium">📤 Impor Data</button>
                        </div>
                    </div>
                </div>

                <div class="bg-red-50 p-6 rounded-xl border-2 border-red-300">
                    <h3 class="text-xl font-semibold mb-2 text-red-700">Opsi Reset Data Keseluruhan</h3>
                    <p class="text-red-600 mb-4">⚠️ Peringatan keras: Mengklik tombol ini akan menghapus SEMUA data siswa, absensi, nilai, RPP, dan jadwal secara PERMANEN. Tindakan ini tidak dapat dibatalkan.</p>
                    <button onclick="resetAllDataConfirmation()" class="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">🗑️ Hapus Semua Data</button>
                </div>
                
                <div class="mt-8 pt-8 border-t-2">
                     <h3 class="text-xl font-semibold mb-2">Dukungan Sistem & Donasi</h3>
                     <p class="text-gray-600 mb-4">Jika Anda mengalami kendala atau ingin memberikan masukan, silakan hubungi kami.</p>
                     <div class="flex flex-col md:flex-row gap-4 items-start">
                        <a href="https://wa.me/6282112121707" target="_blank" class="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 448 512" fill="white"><path d="M380.9 97.1C339.1 55.4 286.5 32 229.8 32c-56.6 0-109.2 23.4-151 64.9C37.1 138.8 21.8 191 21.8 256c0 55.2 11.2 107.5 33.3 151.7l-29 105.7c-2.4 8.7 5.7 16.5 14.4 14.4l105.7-29c44.2 22.1 96.5 33.3 151.7 33.3c56.7 0 109.3-23.4 151.1-64.9C432.9 373.2 448 321 448 256c0-55.2-11.2-107.5-33.3-151.7zm-99.7 202.9c-2.7 5-7.7 9-11.5 13.9-3.8 4.9-7.8 9.7-11.9 14.5-3.6 4.2-7 8.3-10.4 12.3-4.1 4.9-8.4 9.6-12.7 14.2-3.8 4-7.8 7.7-11.6 11.4-5.3 5.3-11.3 9.4-17.6 12.7-6.2 3.3-12.8 5.7-19.4 6.9-6.3 1.2-13 1.6-19.5 0-6.6-1.5-12.9-4.3-18.7-8.5-5.3-3.7-10.4-8-15.1-12.7-4.3-4.2-8.4-8.7-12.3-13.4-3.6-4.5-7.1-8.9-10.4-13.4-3.8-4.9-7.8-9.6-11.5-14.5-2.7-5-7.7-9-11.5-13.9-1.3-1.6-2.5-3.3-3.7-5-1.1-1.3-2.2-2.7-3.3-4.1-1-1.4-2.1-2.9-3.1-4.4-1.1-1.5-2.1-3-3.1-4.6-1.5-2.6-2.9-5.1-4.2-7.8-1.5-2.8-3-5.5-4.4-8.3-1.2-2.5-2.5-5.1-3.6-7.7-1.1-2.5-2.2-5.1-3.1-7.7-1-2.5-1.9-5-2.7-7.6-1.1-3.4-2.1-6.9-2.7-10.3-.6-3.4-1.2-6.8-1.2-10.2 0-14.8 5.8-28.7 15.6-38.5 9.8-9.8 23.7-15.6 38.5-15.6 14.8 0 28.7 5.8 38.5 15.6 9.8 9.8 15.6 23.7 15.6 38.5 0 3.4-.6 6.8-1.2 10.2-.8 3.4-1.7 6.9-2.7 10.3-1 2.5-2.1 5.1-3.1 7.7-1.1 2.5-2.4 5.1-3.6 7.7-1.4 2.8-2.9 5.5-4.4 8.3-1.5 2.6-2.9 5.1-4.2 7.8-1.1 1.5-2.1 3-3.1 4.6-1 1.4-2.1 2.9-3.3 4.1-1.2 1.6-2.5 3.3-3.7 5z"/></svg>
                            Hubungi Kami (WhatsApp)
                        </a>
                        <a href="https://link.dana.id/minta?full_url=https://qr.dana.id/v1/281012012024041300956460" target="_blank" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                            <img src="https://placehold.co/20x20/ffffff/000000?text=DANA" alt="Logo DANA" class="w-5 h-5">
                            Donasi (DANA)
                        </a>
                    </div>
                </div>
            </div>`;
            break;
    }

    // Masukkan HTML ke dalam kontainer
    if (html) {
        container.innerHTML = html;
    }
    
    // Lampirkan event listener SETELAH HTML dimuat
    if (tabName === 'dashboard') {
         document.getElementById('dashboardKelas').addEventListener('change', updateDashboard);
         updateSelectOptions();
         updateDashboard();
    } else if (tabName === 'rekap') {
        ['rekapKelas', 'rekapStartDate', 'rekapEndDate', 'rekapSearch'].forEach(id => document.getElementById(id).addEventListener('input', updateRekap));
        setInitialDates(); 
        updateSelectOptions(); 
        updateRekap();
    } else if (tabName === 'manajemen') {
        document.getElementById('addStudentForm').addEventListener('submit', addStudent);
        document.getElementById('manajemenKelas').addEventListener('change', (e) => updateManajemenTable(e.target.value));
        updateSelectOptions();
    } else if (tabName === 'setting') {
        document.getElementById('importFile').addEventListener('change', (e) => {
            document.getElementById('fileName').textContent = e.target.files.length > 0 ? e.target.files[0].name : '';
        });
    }
}

// Fungsi untuk memuat konten sub-menu Administrasi
function loadAdministrasiTabContent(subMenuName) {
    const container = document.getElementById('content-administrasi');
    let html = `
        <div class="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-4">Administrasi Guru</h2>
            <nav class="flex flex-wrap gap-2 border-b-2 border-gray-100 mb-6">
                <button onclick="switchAdministrasiSubMenu('rpp')" id="sub-rpp" class="px-4 py-2 rounded-t-lg font-medium">Manajemen RPP</button>
                <button onclick="switchAdministrasiSubMenu('jadwal')" id="sub-jadwal" class="px-4 py-2 rounded-t-lg font-medium">Jadwal & Kalender</button>
                <button onclick="switchAdministrasiSubMenu('arsip')" id="sub-arsip" class="px-4 py-2 rounded-t-lg font-medium">Arsip & Dokumentasi</button>
                <button onclick="switchAdministrasiSubMenu('biodata')" id="sub-biodata" class="px-4 py-2 rounded-t-lg font-medium">Biodata & Profil</button>
            </nav>
            <div id="administrasi-content"></div>
        </div>
    `;
    container.innerHTML = html;
    switchAdministrasiSubMenu(subMenuName);
}

// Fungsi untuk beralih antar sub-menu Administrasi
function switchAdministrasiSubMenu(subMenuName) {
    currentAdministrasiSubMenu = subMenuName;
    document.querySelectorAll('#content-administrasi .rounded-t-lg').forEach(button => {
        button.classList.remove('bg-blue-600', 'text-white');
        button.classList.add('text-gray-600', 'hover:bg-gray-100');
    });
    document.getElementById(`sub-${subMenuName}`).classList.add('bg-blue-600', 'text-white');
    document.getElementById(`sub-${subMenuName}`).classList.remove('text-gray-600', 'hover:bg-gray-100');

    const subContainer = document.getElementById('administrasi-content');
    subContainer.innerHTML = '';
    subContainer.classList.add('fade-in');

    switch(subMenuName) {
        case 'rpp':
            renderRppManagement();
            break;
        case 'jadwal':
            renderJadwalKalender();
            break;
        case 'arsip':
            renderArsipDokumentasi();
            break;
        case 'biodata':
            renderBiodataProfile();
            break;
    }
}

// Fungsi untuk menampilkan konten Manajemen RPP
function renderRppManagement() {
    const subContainer = document.getElementById('administrasi-content');
    let kelasOptions = Object.keys(dataSiswa).sort().map(k => `<option value="${k}">${k}</option>`).join('');
    let html = `
        <h3 class="text-xl font-semibold mb-4">Manajemen Rencana Pelaksanaan Pembelajaran (RPP)</h3>
        <div class="bg-gray-50 p-6 rounded-xl border mb-6">
            <h4 class="text-lg font-medium mb-4">Formulir RPP Digital</h4>
            <form id="rppForm" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="rppKelas" class="block text-sm font-medium">Kelas</label>
                    <select id="rppKelas" name="kelas" class="mt-1 block w-full p-2 border rounded-md">
                        <option value="">Pilih Kelas</option>
                        ${kelasOptions}
                    </select>
                </div>
                <div>
                    <label for="rppMataPelajaran" class="block text-sm font-medium">Mata Pelajaran</label>
                    <input type="text" id="rppMataPelajaran" name="mataPelajaran" class="mt-1 block w-full p-2 border rounded-md" required>
                </div>
                <div>
                    <label for="rppKompetensi" class="block text-sm font-medium">Kompetensi Dasar</label>
                    <textarea id="rppKompetensi" name="kompetensi" rows="3" class="mt-1 block w-full p-2 border rounded-md" required></textarea>
                </div>
                <div>
                    <label for="rppTujuan" class="block text-sm font-medium">Tujuan Pembelajaran</label>
                    <textarea id="rppTujuan" name="tujuan" rows="3" class="mt-1 block w-full p-2 border rounded-md" required></textarea>
                </div>
                <div>
                    <label for="rppMateri" class="block text-sm font-medium">Materi Pembelajaran</label>
                    <textarea id="rppMateri" name="materi" rows="3" class="mt-1 block w-full p-2 border rounded-md" required></textarea>
                </div>
                <div>
                    <label for="rppMetode" class="block text-sm font-medium">Metode Pembelajaran</label>
                    <textarea id="rppMetode" name="metode" rows="3" class="mt-1 block w-full p-2 border rounded-md" required></textarea>
                </div>
                <div class="md:col-span-2">
                    <label for="rppPenilaian" class="block text-sm font-medium">Penilaian</label>
                    <textarea id="rppPenilaian" name="penilaian" rows="3" class="mt-1 block w-full p-2 border rounded-md" required></textarea>
                </div>
                <div class="md:col-span-2 flex flex-wrap gap-4 mt-4">
                    <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium">💾 Simpan RPP</button>
                    <button type="button" onclick="loadRppTemplate()" class="bg-purple-600 text-white px-6 py-2.5 rounded-lg font-medium">📄 Gunakan Template</button>
                </div>
            </form>
        </div>

        <div class="mt-6">
            <h4 class="text-xl font-semibold mb-4">Daftar RPP Tersimpan</h4>
            <div id="rppList" class="space-y-4"></div>
        </div>
    `;
    subContainer.innerHTML = html;
    document.getElementById('rppForm').addEventListener('submit', saveRpp);
    updateRppList();
}

// Fungsi untuk memuat template RPP
function loadRppTemplate() {
    document.getElementById('rppMataPelajaran').value = "Informatika";
    document.getElementById('rppKompetensi').value = "Memahami konsep algoritma dan pemrograman dasar.";
    document.getElementById('rppTujuan').value = "Setelah kegiatan pembelajaran, siswa dapat menjelaskan konsep algoritma, mengidentifikasi struktur dasar program, dan membuat program sederhana menggunakan bahasa pemrograman.";
    document.getElementById('rppMateri').value = "Pengenalan Algoritma, Struktur Program (Sekuensial, Percabangan, Perulangan), Sintaks Dasar Python.";
    document.getElementById('rppMetode').value = "Diskusi, studi kasus, dan praktik lab.";
    document.getElementById('rppPenilaian').value = "Penilaian formatif: partisipasi diskusi dan kuis singkat. Penilaian sumatif: proyek akhir membuat program sederhana.";
}

// Fungsi untuk menyimpan data RPP
function saveRpp(event) {
    event.preventDefault();
    const form = event.target;
    const newRpp = {
        id: Date.now(),
        kelas: form.rppKelas.value,
        mataPelajaran: form.rppMataPelajaran.value,
        kompetensi: form.rppKompetensi.value,
        tujuan: form.rppTujuan.value,
        materi: form.rppMateri.value,
        metode: form.rppMetode.value,
        penilaian: form.rppPenilaian.value,
        tanggal: new Date().toISOString().split('T')[0]
    };
    if (!newRpp.kelas || !newRpp.mataPelajaran) {
        showNotification('⚠️ Harap lengkapi semua data wajib!', 'warning');
        return;
    }
    dataRpp.push(newRpp);
    localStorage.setItem('dataRpp', JSON.stringify(dataRpp));
    showNotification('✅ RPP berhasil disimpan!', 'success');
    form.reset();
    updateRppList();
}

// Fungsi untuk memperbarui daftar RPP
function updateRppList() {
    const listContainer = document.getElementById('rppList');
    if (!listContainer) return;
    if (dataRpp.length === 0) {
        listContainer.innerHTML = `<p class="text-center text-gray-500 py-8">Belum ada RPP tersimpan.</p>`;
        return;
    }
    const sortedRpp = [...dataRpp].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));
    listContainer.innerHTML = sortedRpp.map(rpp => `
        <div class="bg-gray-100 p-4 rounded-xl border flex items-center justify-between flex-wrap gap-2">
            <div>
                <p class="font-semibold text-gray-800">${rpp.mataPelajaran} - Kelas ${rpp.kelas}</p>
                <p class="text-sm text-gray-500">Disimpan pada: ${new Date(rpp.tanggal).toLocaleDateString('id-ID')}</p>
            </div>
            <div class="flex gap-2">
                <button onclick="exportRppPdf(${rpp.id})" class="text-red-500 hover:text-red-700 font-medium">📥 PDF</button>
                <button onclick="exportRppExcel(${rpp.id})" class="text-green-500 hover:text-green-700 font-medium">📥 Excel</button>
                <button onclick="deleteRpp(${rpp.id})" class="text-red-600 hover:text-red-800">🗑️ Hapus</button>
            </div>
        </div>
    `).join('');
}

// Fungsi untuk menghapus RPP
function deleteRpp(id) {
    showModal('Konfirmasi Hapus', 'Yakin ingin menghapus RPP ini?', () => {
        dataRpp = dataRpp.filter(r => r.id !== id);
        localStorage.setItem('dataRpp', JSON.stringify(dataRpp));
        showNotification('🗑️ RPP berhasil dihapus!', 'info');
        updateRppList();
    });
}

// Fungsi untuk ekspor RPP ke PDF
function exportRppPdf(id) {
    const rpp = dataRpp.find(r => r.id === id);
    if (!rpp) { showNotification('❌ RPP tidak ditemukan.', 'error'); return; }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Rencana Pelaksanaan Pembelajaran (RPP)`, 105, 20, null, null, "center");
    doc.setFontSize(12);
    doc.text(`Mata Pelajaran: ${rpp.mataPelajaran}`, 14, 35);
    doc.text(`Kelas: ${rpp.kelas}`, 14, 45);
    doc.text(`Tanggal: ${new Date(rpp.tanggal).toLocaleDateString('id-ID')}`, 14, 55);

    const content = [
        { title: "Kompetensi Dasar", text: rpp.kompetensi },
        { title: "Tujuan Pembelajaran", text: rpp.tujuan },
        { title: "Materi Pembelajaran", text: rpp.materi },
        { title: "Metode Pembelajaran", text: rpp.metode },
        { title: "Penilaian", text: rpp.penilaian }
    ];

    let y = 65;
    content.forEach(item => {
        doc.setFontSize(14);
        doc.text(item.title, 14, y);
        y += 7;
        doc.setFontSize(12);
        const splitText = doc.splitTextToSize(item.text, 180);
        doc.text(splitText, 14, y);
        y += (splitText.length * 7) + 5;
    });

    doc.save(`RPP_${rpp.mataPelajaran}_${rpp.kelas}.pdf`);
    showNotification(`📥 RPP berhasil diekspor ke PDF!`, 'success');
}

// Fungsi untuk ekspor RPP ke Excel
function exportRppExcel(id) {
    const rpp = dataRpp.find(r => r.id === id);
    if (!rpp) { showNotification('❌ RPP tidak ditemukan.', 'error'); return; }
    
    const ws_data = [
        ["Rencana Pelaksanaan Pembelajaran (RPP)"],
        ["Mata Pelajaran", rpp.mataPelajaran],
        ["Kelas", rpp.kelas],
        ["Tanggal", new Date(rpp.tanggal).toLocaleDateString('id-ID')],
        [],
        ["Kompetensi Dasar", rpp.kompetensi],
        ["Tujuan Pembelajaran", rpp.tujuan],
        ["Materi Pembelajaran", rpp.materi],
        ["Metode Pembelajaran", rpp.metode],
        ["Penilaian", rpp.penilaian]
    ];
    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "RPP");
    XLSX.writeFile(wb, `RPP_${rpp.mataPelajaran}_${rpp.kelas}.xlsx`);
    showNotification(`📥 RPP berhasil diekspor ke Excel!`, 'success');
}


// Fungsi untuk menampilkan konten Jadwal & Kalender
function renderJadwalKalender() {
    const subContainer = document.getElementById('administrasi-content');
    if (!subContainer) return;
    const jadwalDays = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
    const jadwalList = jadwalDays.map(day => {
        const dayTitle = day.charAt(0).toUpperCase() + day.slice(1);
        const scheduleItems = dataJadwal[day] || [];
        const schedule = scheduleItems.map(item => `
            <div class="bg-white p-3 rounded-lg border">
                <p class="font-semibold">${item.time}</p>
                <p class="text-sm text-gray-600">${item.subject} - ${item.kelas}</p>
            </div>
        `).join('');
        return `
            <div class="p-4 rounded-xl border bg-gray-50">
                <h4 class="font-bold text-lg mb-3">${dayTitle}</h4>
                <div class="space-y-2">${schedule || 'Tidak ada jadwal.'}</div>
            </div>
        `;
    }).join('');

    let html = `
        <h3 class="text-xl font-semibold mb-4">Jadwal Mengajar & Kalender</h3>
        <div class="bg-gray-50 p-6 rounded-xl border mb-6">
            <div class="flex justify-between items-center mb-4">
                <h4 class="text-lg font-medium">Input Jadwal Mengajar</h4>
                <button onclick="undoJadwal()" id="undoJadwalBtn" class="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors" disabled>↩️ Undo</button>
            </div>
            <form id="jadwalForm" class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select id="jadwalHari" class="w-full p-2 border rounded-md" required>
                    <option value="">Pilih Hari</option>
                    <option value="senin">Senin</option>
                    <option value="selasa">Selasa</option>
                    <option value="rabu">Rabu</option>
                    <option value="kamis">Kamis</option>
                    <option value="jumat">Jumat</option>
                </select>
                <input type="time" id="jadwalWaktu" class="w-full p-2 border rounded-md" required>
                <input type="text" id="jadwalPelajaran" placeholder="Mata Pelajaran" class="w-full p-2 border rounded-md" required>
                <select id="jadwalKelas" class="w-full p-2 border rounded-md" required>
                     <option value="">Pilih Kelas</option>
                     ${Object.keys(dataSiswa).sort().map(k => `<option value="${k}">${k}</option>`).join('')}
                </select>
                <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium col-span-1 md:col-span-2">➕ Tambah Jadwal</button>
            </form>
        </div>

        <div class="mt-6">
            <h4 class="text-xl font-semibold mb-4">Jadwal Mengajar Anda</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                ${jadwalList}
            </div>
        </div>

        <div class="mt-8 pt-8 border-t">
            <h4 class="text-xl font-semibold mb-4">Kalender Akademik</h4>
            <div class="grid grid-cols-7 gap-1 text-center font-bold text-gray-600 mb-2">
                <span>Min</span><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span>
            </div>
            <div id="calendarGrid" class="grid grid-cols-7 gap-1"></div>
        </div>
    `;
    subContainer.innerHTML = html;
    document.getElementById('jadwalForm').addEventListener('submit', saveJadwal);
    updateJadwalUndoButton();
    renderCalendar();
}

// Fungsi untuk menyimpan data Jadwal
function saveJadwal(event) {
    event.preventDefault();
    const form = event.target;
    const day = form.jadwalHari.value;
    const newJadwal = {
        time: form.jadwalWaktu.value,
        subject: form.jadwalPelajaran.value,
        kelas: form.jadwalKelas.value
    };
    if (!dataJadwal[day]) dataJadwal[day] = [];
    
    // Simpan state sebelum diubah untuk fitur undo
    jadwalHistory.push(JSON.parse(JSON.stringify(dataJadwal)));

    dataJadwal[day].push(newJadwal);
    // Urutkan jadwal berdasarkan waktu
    dataJadwal[day].sort((a, b) => a.time.localeCompare(b.time));
    
    localStorage.setItem('dataJadwal', JSON.stringify(dataJadwal));
    showNotification('✅ Jadwal berhasil disimpan!', 'success');
    form.reset();
    renderJadwalKalender();
}

// Fungsi untuk membatalkan entri jadwal terakhir
function undoJadwal() {
    if (jadwalHistory.length > 0) {
        dataJadwal = jadwalHistory.pop(); // Kembalikan ke state sebelumnya
        localStorage.setItem('dataJadwal', JSON.stringify(dataJadwal));
        showNotification('↩️ Jadwal terakhir dibatalkan!', 'info');
        renderJadwalKalender();
    }
}

// Fungsi untuk memperbarui status tombol undo
function updateJadwalUndoButton() {
    const undoBtn = document.getElementById('undoJadwalBtn');
    if (undoBtn) {
        undoBtn.disabled = jadwalHistory.length === 0;
    }
}

// Fungsi untuk menampilkan kalender
function renderCalendar() {
    const container = document.getElementById('calendarGrid');
    if (!container) return;
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let calendarHtml = '';

    for (let i = 0; i < firstDay.getDay(); i++) {
        calendarHtml += `<div class="p-2"></div>`;
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayDate = new Date(year, month, i);
        const dateKey = dayDate.toISOString().split('T')[0];
        const note = dataKalender[dateKey] || '';
        const isToday = i === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        calendarHtml += `<div class="p-2 border rounded-md text-center cursor-pointer relative ${isToday ? 'bg-blue-600 text-white font-bold' : 'bg-white hover:bg-gray-100'}" onclick="promptCalendarNote('${dateKey}')">
            ${i}
            ${note ? `<div class="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full" title="${note}"></div>` : ''}
        </div>`;
    }
    container.innerHTML = calendarHtml;
}

// Fungsi untuk meminta catatan kalender
function promptCalendarNote(dateKey) {
    const existingNote = dataKalender[dateKey] || '';
    const dateDisplay = new Date(dateKey).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
    const bodyHtml = `
        <p>Catatan untuk tanggal: <strong>${dateDisplay}</strong></p>
        <textarea id="modal-note" rows="4" class="w-full p-2 border rounded-md mt-2">${existingNote}</textarea>
    `;
    showModalWithInputs(`Catatan Kalender`, bodyHtml, () => {
        const note = document.getElementById('modal-note').value;
        if (note.trim() !== '') {
            dataKalender[dateKey] = note;
            showNotification('✅ Catatan disimpan!', 'success');
        } else {
            delete dataKalender[dateKey];
            showNotification('🗑️ Catatan dihapus!', 'info');
        }
        localStorage.setItem('dataKalender', JSON.stringify(dataKalender));
        renderCalendar();
    });
}


// Fungsi untuk menampilkan konten Arsip & Dokumentasi
function renderArsipDokumentasi() {
    const subContainer = document.getElementById('administrasi-content');
    if (!subContainer) return;
    let html = `
        <h3 class="text-xl font-semibold mb-4">Arsip & Dokumentasi</h3>
        <p class="text-gray-600 mb-4">Kelola tautan ke dokumen Anda di Google Drive.</p>
        <div class="bg-gray-50 p-6 rounded-xl border mb-6">
            <h4 class="text-lg font-medium mb-4">Tambah Tautan Dokumen</h4>
            <form id="arsipForm" class="flex flex-col md:flex-row gap-4 items-end">
                <div class="flex-1 w-full">
                    <label for="arsipNamaDokumen" class="block text-sm font-medium">Nama Dokumen</label>
                    <input type="text" id="arsipNamaDokumen" placeholder="Contoh: Modul Kelas 11" class="mt-1 block w-full p-2 border rounded-md" required>
                </div>
                <div class="flex-1 w-full">
                    <label for="arsipLink" class="block text-sm font-medium">Tautan Google Drive</label>
                    <input type="url" id="arsipLink" placeholder="Contoh: https://drive.google.com/..." class="mt-1 block w-full p-2 border rounded-md" required>
                </div>
                <button type="submit" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium shrink-0">➕ Simpan Tautan</button>
            </form>
        </div>
        <div class="mt-6">
            <h4 class="text-xl font-semibold mb-4">Daftar Tautan Tersimpan</h4>
            <div id="arsipList" class="space-y-4"></div>
        </div>
    `;
    subContainer.innerHTML = html;
    document.getElementById('arsipForm').addEventListener('submit', saveDriveLink);
    updateArsipList();
}

// Fungsi untuk menyimpan tautan drive baru
function saveDriveLink(event) {
    event.preventDefault();
    const nama = document.getElementById('arsipNamaDokumen').value;
    const link = document.getElementById('arsipLink').value;
    if (nama && link) {
        dataArsip.push({
            id: Date.now(),
            name: nama,
            link: link
        });
        localStorage.setItem('dataArsip', JSON.stringify(dataArsip));
        showNotification('✅ Tautan berhasil disimpan!', 'success');
        event.target.reset();
        updateArsipList();
    } else {
        showNotification('⚠️ Harap isi semua kolom!', 'warning');
    }
}

// Fungsi untuk memperbarui daftar tautan drive
function updateArsipList() {
    const listContainer = document.getElementById('arsipList');
    if (!listContainer) return;
    if (dataArsip.length === 0) {
        listContainer.innerHTML = `<p class="text-center text-gray-500 py-8">Belum ada tautan tersimpan.</p>`;
        return;
    }
    listContainer.innerHTML = dataArsip.map(doc => `
        <div class="bg-gray-100 p-4 rounded-xl border flex items-center justify-between flex-wrap gap-2">
            <div>
                <p class="font-semibold text-gray-800">${doc.name}</p>
                <a href="${doc.link}" target="_blank" class="text-sm text-blue-600 hover:underline break-words">${doc.link}</a>
            </div>
            <div class="flex gap-2 shrink-0">
                <a href="${doc.link}" target="_blank" class="p-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition-colors">Buka</a>
                <button onclick="deleteDriveLink(${doc.id})" class="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors">Hapus</button>
            </div>
        </div>
    `).join('');
}

// Fungsi untuk menghapus tautan drive
function deleteDriveLink(id) {
    showModal('Konfirmasi Hapus', 'Yakin ingin menghapus tautan ini?', () => {
        dataArsip = dataArsip.filter(d => d.id !== id);
        localStorage.setItem('dataArsip', JSON.stringify(dataArsip));
        showNotification('🗑️ Tautan berhasil dihapus!', 'info');
        updateArsipList();
    });
}


// Fungsi untuk menampilkan konten Biodata & Profil
function renderBiodataProfile() {
    const subContainer = document.getElementById('administrasi-content');
    if (!subContainer) return;
    let html = `
        <h3 class="text-xl font-semibold mb-4">Biodata & Profil</h3>
        <p class="text-gray-600 mb-4">Informasi ini akan digunakan pada laporan dan cetakan dokumen.</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- School Profile -->
            <div class="bg-gray-50 p-6 rounded-xl border">
                <h4 class="text-lg font-medium mb-4">Profil Sekolah</h4>
                <form id="sekolahForm" class="space-y-4">
                    <div>
                        <label for="sekolahNama" class="block text-sm font-medium">Nama Sekolah</label>
                        <input type="text" id="sekolahNama" value="${dataProfil.sekolah.nama}" class="mt-1 block w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="sekolahAlamat" class="block text-sm font-medium">Alamat</label>
                        <input type="text" id="sekolahAlamat" value="${dataProfil.sekolah.alamat}" class="mt-1 block w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="sekolahKepsek" class="block text-sm font-medium">Kepala Sekolah</label>
                        <input type="text" id="sekolahKepsek" value="${dataProfil.sekolah.kepsek}" class="mt-1 block w-full p-2 border rounded-md">
                    </div>
                    <button type="button" onclick="saveProfile('sekolah')" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium">💾 Simpan Profil Sekolah</button>
                </form>
            </div>

            <!-- Teacher Profile -->
            <div class="bg-gray-50 p-6 rounded-xl border">
                <h4 class="text-lg font-medium mb-4">Profil Guru</h4>
                <form id="guruForm" class="space-y-4">
                    <div>
                        <label for="guruNama" class="block text-sm font-medium">Nama Guru</label>
                        <input type="text" id="guruNama" value="${dataProfil.guru.nama}" class="mt-1 block w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="guruNip" class="block text-sm font-medium">NIP</label>
                        <input type="text" id="guruNip" value="${dataProfil.guru.nip}" class="mt-1 block w-full p-2 border rounded-md">
                    </div>
                    <div>
                        <label for="guruBidang" class="block text-sm font-medium">Bidang Studi</label>
                        <input type="text" id="guruBidang" value="${dataProfil.guru.bidang}" class="mt-1 block w-full p-2 border rounded-md">
                    </div>
                    <button type="button" onclick="saveProfile('guru')" class="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium">💾 Simpan Profil Guru</button>
                </form>
            </div>
        </div>
    `;
    subContainer.innerHTML = html;
}

// Fungsi untuk menyimpan data profil
function saveProfile(type) {
    if (type === 'sekolah') {
        dataProfil.sekolah.nama = document.getElementById('sekolahNama').value;
        dataProfil.sekolah.alamat = document.getElementById('sekolahAlamat').value;
        dataProfil.sekolah.kepsek = document.getElementById('sekolahKepsek').value;
    } else if (type === 'guru') {
        dataProfil.guru.nama = document.getElementById('guruNama').value;
        dataProfil.guru.nip = document.getElementById('guruNip').value;
        dataProfil.guru.bidang = document.getElementById('guruBidang').value;
    }
    localStorage.setItem('dataProfil', JSON.stringify(dataProfil));
    showNotification('✅ Profil berhasil diperbarui!', 'success');
}

// Fungsi untuk menampilkan dialog konfirmasi reset data
function resetAllDataConfirmation() {
    const bodyHtml = `
        <p class="text-red-500 font-semibold text-center mb-4">Anda yakin ingin menghapus semua data? Tindakan ini tidak dapat dibatalkan.</p>
        <p class="text-sm text-gray-500">Semua data siswa, absensi, nilai, RPP, jadwal, dan arsip akan hilang permanen.</p>
        <div class="flex items-center gap-2 mt-4">
            <input type="checkbox" id="confirmResetCheckbox" class="rounded text-red-500">
            <label for="confirmResetCheckbox" class="text-sm text-red-600 font-medium">Saya mengerti dan ingin melanjutkan.</label>
        </div>
    `;
    showModalWithInputs('Hapus Semua Data', bodyHtml, () => {
        const checkbox = document.getElementById('confirmResetCheckbox');
        if (checkbox.checked) {
            resetAllData();
        } else {
            showNotification('⚠️ Operasi dibatalkan. Anda harus mencentang kotak konfirmasi.', 'warning');
        }
    });
}

// Fungsi untuk melakukan reset data
function resetAllData() {
    localStorage.clear();
    showNotification('🗑️ Semua data berhasil direset!', 'info');
    setTimeout(() => window.location.reload(), 1500);
}

// --- Manajemen Data & Logika Inti ---

document.addEventListener('DOMContentLoaded', function() {
    // Perbaikan: Pastikan semua data diinisialisasi di awal jika localStorage kosong
    if (!localStorage.getItem('dataSiswa')) localStorage.setItem('dataSiswa', JSON.stringify(initialDataSiswa));
    // Tambahkan inisialisasi untuk objek data lainnya di sini jika perlu
    
    setInitialDates();
    updateSelectOptions();
    showTab('dashboard'); 
    document.getElementById('kelasSelect').addEventListener('change', (e) => tampilkanDaftarSiswa(e.target.value));
    document.getElementById('tanggalAbsen').addEventListener('change', () => tampilkanDaftarSiswa(document.getElementById('kelasSelect').value));
    document.getElementById('penilaianKelas').addEventListener('change', (e) => tampilkanDaftarNilai(e.target.value));
    document.getElementById('tanggalNilai').addEventListener('change', () => tampilkanDaftarNilai(document.getElementById('penilaianKelas').value));
});

// Fungsi untuk menambah siswa baru
function addStudent(event) {
    event.preventDefault();
    const kelas = document.getElementById('newKelas').value;
    const nama = document.getElementById('newNama').value;
    const jk = document.getElementById('newJk').value;
    if (kelas && nama && jk) {
        const nis = `generated-${Date.now()}`;
        if (!dataSiswa[kelas]) dataSiswa[kelas] = [];
        dataSiswa[kelas].push({ nis, nama, jk });
        saveDataSiswa();
        showNotification('✅ Siswa berhasil ditambahkan!', 'success');
        event.target.reset();
        updateManajemenTable(kelas);
    } else {
        showNotification('⚠️ Semua kolom harus diisi!', 'warning');
    }
}

// Fungsi untuk menyimpan data siswa ke localStorage
function saveDataSiswa() {
    localStorage.setItem('dataSiswa', JSON.stringify(dataSiswa));
    updateSelectOptions();
}

// Fungsi untuk mengatur tanggal awal
function setInitialDates() {
    const today = new Date();
    const todayISO = today.toISOString().split('T')[0];
    document.getElementById('currentDate').textContent = today.toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    ['tanggalAbsen', 'tanggalNilai'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = todayISO;
    });

    // Set tanggal untuk rekap jika elemen ada
    const rekapEndDateEl = document.getElementById('rekapEndDate');
    const rekapStartDateEl = document.getElementById('rekapStartDate');
    if (rekapEndDateEl && rekapStartDateEl) {
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
        rekapEndDateEl.value = todayISO;
        rekapStartDateEl.value = startOfMonth;
    }
}

// Fungsi untuk memperbarui semua pilihan kelas
function updateSelectOptions() {
    const classList = Object.keys(dataSiswa).sort();
    const selectsToUpdate = ['kelasSelect', 'penilaianKelas', 'rekapKelas', 'manajemenKelas', 'newKelas', 'dashboardKelas'];
    selectsToUpdate.forEach(selectId => {
        const selectElement = document.getElementById(selectId);
        if (!selectElement) return;
        
        const currentValue = selectElement.value;
        let optionsHtml = `<option value="">Pilih Kelas</option>`;
        const optgroups = { 'Kelas 12': [], 'Kelas 11': [], 'Kelas 10': [], 'Lainnya': [] };
        
        classList.forEach(kelas => {
            const studentCount = dataSiswa[kelas] ? dataSiswa[kelas].length : 0;
            const option = `<option value="${kelas}">${kelas} (${studentCount} siswa)</option>`;
            if (kelas.startsWith('12')) optgroups['Kelas 12'].push(option);
            else if (kelas.startsWith('11')) optgroups['Kelas 11'].push(option);
            else if (kelas.startsWith('10')) optgroups['Kelas 10'].push(option);
            else optgroups['Lainnya'].push(option);
        });

        for (const group in optgroups) {
            if (optgroups[group].length > 0) {
                optionsHtml += `<optgroup label="${group}">${optgroups[group].join('')}</optgroup>`;
            }
        }
        
        selectElement.innerHTML = optionsHtml;
        // Coba setel kembali nilai yang dipilih sebelumnya
        if (Array.from(selectElement.options).some(opt => opt.value === currentValue)) {
            selectElement.value = currentValue;
        }
    });
}

// Fungsi untuk menampilkan daftar siswa untuk absensi
function tampilkanDaftarSiswa(kelas) {
    const container = document.getElementById('daftarSiswa');
    const actionButtons = document.getElementById('actionButtons');
    if (!kelas || !dataSiswa[kelas]) {
        container.innerHTML = `<div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">👥</div><p>Pilih kelas untuk menampilkan daftar siswa</p></div>`;
        actionButtons.style.display = 'none';
        return;
    }
    const siswaList = dataSiswa[kelas];
    const tanggal = document.getElementById('tanggalAbsen').value;
    let html = '';
    siswaList.forEach((siswa, index) => {
        const key = `${kelas}_${siswa.nis}_${tanggal}`;
        const currentStatus = dataAbsensi[key];
        html += `<div class="bg-white border rounded-xl p-3 lg:p-4 hover:shadow-md transition-all fade-in mobile-card"><div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3"><div class="flex items-center gap-4"><div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">${index + 1}</div><div><h3 class="font-semibold text-gray-800">${siswa.nama}</h3><p class="text-sm text-gray-600">${siswa.jk === 'L' ? 'Laki-laki' : 'Perempuan'}</p></div></div><div class="mobile-grid lg:flex lg:gap-2"><button onclick="setStatus(this, '${key}', 'hadir')" class="status-btn status-btn-mobile p-2 rounded-lg text-sm font-medium ${currentStatus === 'hadir' ? 'bg-green-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-green-100'}">✅<span class="hidden lg:inline"> Hadir</span></button><button onclick="setStatus(this, '${key}', 'sakit')" class="status-btn status-btn-mobile p-2 rounded-lg text-sm font-medium ${currentStatus === 'sakit' ? 'bg-yellow-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-yellow-100'}">🤒<span class="hidden lg:inline"> Sakit</span></button><button onclick="setStatus(this, '${key}', 'izin')" class="status-btn status-btn-mobile p-2 rounded-lg text-sm font-medium ${currentStatus === 'izin' ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-blue-100'}">📝<span class="hidden lg:inline"> Izin</span></button><button onclick="setStatus(this, '${key}', 'alpa')" class="status-btn status-btn-mobile p-2 rounded-lg text-sm font-medium ${currentStatus === 'alpa' ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-red-100'}">❌<span class="hidden lg:inline"> Alpa</span></button></div></div></div>`;
    });
    container.innerHTML = html;
    actionButtons.style.display = 'flex';
}

function setStatus(buttonElement, key, status) {
    dataAbsensi[key] = status;
    const buttonGroup = buttonElement.parentElement;
    buttonGroup.querySelectorAll('.status-btn').forEach(btn => {
        btn.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-blue-500', 'bg-red-500', 'text-white', 'shadow-lg');
        btn.classList.add('bg-gray-100', 'text-gray-600');
    });
    buttonElement.classList.remove('bg-gray-100', 'text-gray-600');
    const statusClasses = {hadir: 'bg-green-500', sakit: 'bg-yellow-500', izin: 'bg-blue-500', alpa: 'bg-red-500'};
    buttonElement.classList.add('text-white', 'shadow-lg', statusClasses[status]);
}

function simpanAbsensi() {
    localStorage.setItem('dataAbsensi', JSON.stringify(dataAbsensi));
    showNotification('✅ Absensi berhasil disimpan!', 'success');
}

function resetAbsensi() {
    const kelas = document.getElementById('kelasSelect').value;
    const tanggal = document.getElementById('tanggalAbsen').value;
    if (kelas && tanggal) {
        dataSiswa[kelas].forEach(siswa => {
            delete dataAbsensi[`${kelas}_${siswa.nis}_${tanggal}`];
        });
        tampilkanDaftarSiswa(kelas);
        showNotification('🔄 Absensi hari ini telah direset', 'info');
    }
}

function tampilkanDaftarNilai(kelas) {
    const container = document.getElementById('daftarNilai');
    const actionButtons = document.getElementById('actionNilaiButtons');
    const materiInput = document.getElementById('materiNilai');
    if (!kelas || !dataSiswa[kelas]) {
        container.innerHTML = `<div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">📝</div><p>Pilih kelas untuk memasukkan nilai</p></div>`;
        actionButtons.style.display = 'none'; return;
    }
    const tanggal = document.getElementById('tanggalNilai').value;
    if (!tanggal) {
        container.innerHTML = `<div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">📅</div><p>Pilih tanggal untuk memasukkan nilai</p></div>`;
        actionButtons.style.display = 'none'; return;
    }
    materiInput.value = dataMateri[`${kelas}_${tanggal}`] || '';
    let html = `<table class="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left text-sm font-medium">No</th><th class="p-3 text-left text-sm font-medium">Nama Siswa</th><th class="p-3 text-center text-sm font-medium">Nilai Harian</th><th class="p-3 text-center text-sm font-medium">Nilai Tugas</th></tr></thead><tbody>`;
    dataSiswa[kelas].forEach((siswa, index) => {
        const keyHarian = `${kelas}_${siswa.nis}_harian_${tanggal}`;
        const keyTugas = `${kelas}_${siswa.nis}_tugas_${tanggal}`;
        html += `<tr class="hover:bg-gray-50"><td class="p-3 border-b">${index + 1}</td><td class="p-3 border-b font-medium">${siswa.nama}</td><td class="p-3 border-b text-center"><input type="number" oninput="updateNilai('${keyHarian}', this.value)" value="${dataNilai[keyHarian] || ''}" min="0" max="100" class="w-20 text-center border rounded-md"></td><td class="p-3 border-b text-center"><input type="number" oninput="updateNilai('${keyTugas}', this.value)" value="${dataNilai[keyTugas] || ''}" min="0" max="100" class="w-20 text-center border rounded-md"></td></tr>`;
    });
    container.innerHTML = html + `</tbody></table>`;
    actionButtons.style.display = 'flex';
}

function updateNilai(key, value) {
    const nilai = parseInt(value, 10);
    if (!isNaN(nilai) && nilai >= 0 && nilai <= 100) {
        dataNilai[key] = nilai;
    } else if (value === '') {
        delete dataNilai[key];
    }
}

function simpanNilai() {
    const kelas = document.getElementById('penilaianKelas').value;
    const tanggal = document.getElementById('tanggalNilai').value;
    const materi = document.getElementById('materiNilai').value;
    if (kelas && tanggal) {
        const materiKey = `${kelas}_${tanggal}`;
        if (materi) dataMateri[materiKey] = materi;
        else delete dataMateri[materiKey];
        localStorage.setItem('dataMateri', JSON.stringify(dataMateri));
    }
    localStorage.setItem('dataNilai', JSON.stringify(dataNilai));
    showNotification('✅ Nilai & Materi berhasil disimpan!', 'success');
}

function showNotification(message, type) {
    const colors = { success: 'bg-green-500', info: 'bg-blue-500', warning: 'bg-yellow-500', error: 'bg-red-500' };
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-[101] fade-in`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-20px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getWorkingDays(startDate, endDate) {
    let count = 0;
    const current = new Date(startDate);
    const end = new Date(endDate);
    while (current <= end) {
        const day = current.getDay();
        if (day >= 1 && day <= 5) { // Senin sampai Jumat
            count++; 
        }
        current.setDate(current.getDate() + 1);
    }
    return count;
}

function generateReportData(kelas, startDateStr, endDateStr, searchQuery = '') {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);
    let siswaList = (dataSiswa[kelas] || []).filter(s => s.nama.toLowerCase().includes(searchQuery.toLowerCase()));
    const reportData = { absensi: { totals: { hadir: 0, sakit: 0, izin: 0, alpa: 0 }, students: [] }, nilai: { students: [] } };
    const totalWorkingDays = getWorkingDays(startDate, endDate);
    
    siswaList.forEach((siswa, index) => {
        let hadir = 0, sakit = 0, izin = 0, alpa = 0;
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const day = d.getDay();
            if (day >= 1 && day <= 5) { // Hanya hitung Senin-Jumat
                const status = dataAbsensi[`${kelas}_${siswa.nis}_${d.toISOString().split('T')[0]}`];
                if (status === 'hadir') hadir++; 
                else if (status === 'sakit') sakit++; 
                else if (status === 'izin') izin++; 
                else if (status === 'alpa') alpa++;
            }
        }
        reportData.absensi.students.push({ no: index + 1, nama: siswa.nama, hadir, sakit, izin, alpa, persentase: totalWorkingDays > 0 ? ((hadir / totalWorkingDays) * 100).toFixed(1) : 0 });
        Object.keys(reportData.absensi.totals).forEach(key => reportData.absensi.totals[key] += {hadir, sakit, izin, alpa}[key]);
        
        let totalHarian = 0, countHarian = 0, totalTugas = 0, countTugas = 0;
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            const dateStr = d.toISOString().split('T')[0];
            if (dataNilai[`${kelas}_${siswa.nis}_harian_${dateStr}`] !== undefined) { totalHarian += dataNilai[`${kelas}_${siswa.nis}_harian_${dateStr}`]; countHarian++; }
            if (dataNilai[`${kelas}_${siswa.nis}_tugas_${dateStr}`] !== undefined) { totalTugas += dataNilai[`${kelas}_${siswa.nis}_tugas_${dateStr}`]; countTugas++; }
        }
        const rataRataHarian = countHarian > 0 ? (totalHarian / countHarian).toFixed(2) : '0.00';
        const rataRataTugas = countTugas > 0 ? (totalTugas / countTugas).toFixed(2) : '0.00';
        const nilaiAkhir = (countHarian + countTugas) > 0 ? ((totalHarian + totalTugas) / (countHarian + countTugas)).toFixed(2) : '0.00';
        reportData.nilai.students.push({ no: index + 1, nama: siswa.nama, rataRataHarian, rataRataTugas, nilaiAkhir });
    });
    return reportData;
}

// Fungsi utama untuk menangani rekap dan laporan
function updateRekap() {
    const kelas = document.getElementById('rekapKelas').value;
    const startDateStr = document.getElementById('rekapStartDate').value;
    const endDateStr = document.getElementById('rekapEndDate').value;
    const searchQuery = document.getElementById('rekapSearch').value;

    const recapTableBody = document.getElementById('rekapTable');
    const laporanPreviewContainer = document.getElementById('laporanPreview');

    if (!kelas || !startDateStr || !endDateStr) {
        if (recapTableBody) recapTableBody.innerHTML = `<tr><td colspan="7" class="p-8 text-center text-gray-500">Pilih kelas dan rentang tanggal</td></tr>`;
        if (laporanPreviewContainer) laporanPreviewContainer.innerHTML = `<div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">📄</div><p>Pilih kelas dan rentang tanggal untuk preview laporan</p></div>`;
        return;
    }

    const reportData = generateReportData(kelas, startDateStr, endDateStr, searchQuery);
    const { totals, students } = reportData.absensi;

    // Update Statistik Rekap
    ['totalHadir', 'totalSakit', 'totalIzin', 'totalAlpa'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = totals[id.replace('total', '').toLowerCase()];
    });

    // Update Tabel Rekap
    let recapTableHtml = '';
    if (students.length === 0) recapTableHtml = `<tr><td colspan="7" class="p-8 text-center text-gray-500">Tidak ada data.</td></tr>`;
    else students.forEach(s => {
        recapTableHtml += `<tr class="hover:bg-gray-50"><td class="p-3 border-b">${s.no}</td><td class="p-3 border-b font-medium">${s.nama}</td><td class="p-3 border-b text-center"><span class="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">${s.hadir}</span></td><td class="p-3 border-b text-center"><span class="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">${s.sakit}</span></td><td class="p-3 border-b text-center"><span class="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">${s.izin}</span></td><td class="p-3 border-b text-center"><span class="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">${s.alpa}</span></td><td class="p-3 border-b text-center font-semibold ${s.persentase >= 80 ? 'text-green-600' : s.persentase >= 60 ? 'text-yellow-600' : 'text-red-600'}">${s.persentase}%</td></tr>`;
    });
    if (recapTableBody) recapTableBody.innerHTML = recapTableHtml;

    // Update Preview Laporan
    const namaGuru = dataProfil.guru.nama || '_________________';
    const mataPelajaran = dataProfil.guru.bidang || 'Guru Mata Pelajaran';
    const namaSekolah = dataProfil.sekolah.nama || '_________________';
    const alamatSekolah = dataProfil.sekolah.alamat || '_________________';
    const namaKepsek = dataProfil.sekolah.kepsek || '_________________';

    const period = `${new Date(startDateStr).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})} - ${new Date(endDateStr).toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}`;
    let absensiBody = reportData.absensi.students.map(s => `<tr><td class="border p-2">${s.no}</td><td class="border p-2">${s.nama}</td><td class="border p-2 text-center">${s.hadir}</td><td class="border p-2 text-center">${s.sakit}</td><td class="border p-2 text-center">${s.izin}</td><td class="border p-2 text-center">${s.alpa}</td><td class="border p-2 text-center">${s.persentase}%</td></tr>`).join('');
    
    // Perbaikan: Ubah variabel s.nilaiAkhir menjadi "Nilai Akhir" di judul tabel
    let nilaiBody = reportData.nilai.students.map(s => `<tr><td class="border p-2">${s.no}</td><td class="border p-2">${s.nama}</td><td class="border p-2 text-center">${s.rataRataHarian}</td><td class="border p-2 text-center">${s.rataRataTugas}</td><td class="border p-2 text-center font-bold">${s.nilaiAkhir}</td></tr>`).join('');
    
    if (laporanPreviewContainer) laporanPreviewContainer.innerHTML = `<div class="print-only text-sm"><div class="text-center mb-6"><h1 class="text-2xl font-bold">${namaSekolah}</h1><p>${alamatSekolah}</p><h2 class="text-xl font-semibold mt-4">LAPORAN ABSENSI & NILAI</h2><p class="text-lg">Kelas ${kelas}</p><p>Periode: ${period}</p></div></div><div class="no-print mb-4"><h3 class="text-lg font-semibold">Preview Laporan Lengkap</h3><p>Periode: ${period}</p></div><div id="absensi-laporan"><h3 class="text-lg font-semibold mb-2 mt-4">Laporan Absensi</h3><div class="overflow-x-auto"><table class="w-full border-collapse border"><thead><tr class="bg-gray-100"><th class="p-2 text-left">No</th><th class="p-2 text-left">Nama</th><th class="p-2 text-center">H</th><th class="p-2 text-center">S</th><th class="p-2 text-center">I</th><th class="p-2 text-center">A</th><th class="p-2 text-center">%</th></tr></thead><tbody>${absensiBody}</tbody></table></div></div><div id="nilai-laporan" class="mt-8"><h3 class="text-lg font-semibold mb-2">Laporan Nilai</h3><div class="overflow-x-auto"><table class="w-full border-collapse border"><thead><tr class="bg-gray-100"><th class="p-2 text-left">No</th><th class="p-2 text-left">Nama</th><th class="p-2 text-center">Rata Harian</th><th class="p-2 text-center">Rata Tugas</th><th class="p-2 text-center font-bold">Nilai Akhir</th></tr></thead><tbody>${nilaiBody}</tbody></table></div></div><div class="print-only mt-8 text-sm"><div class="flex justify-between"><div class="text-center"><p>Mengetahui,</p><p>Kepala Sekolah</p><br><br><br><p>${namaKepsek}</p></div><div class="text-center"><p>${new Date().toLocaleDateString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'})}</p><p>${mataPelajaran}</p><br><br><br><p>${namaGuru}</p></div></div></div>`;
}


// Fungsi cetak laporan yang sudah diperbaiki
function cetakLaporan() {
    if (!document.getElementById('rekapKelas').value) { showNotification('⚠️ Pilih kelas terlebih dahulu!', 'warning'); return; }
    window.print();
}


// Fungsi export Excel yang sudah diperbaiki
function exportToExcel() {
    const kelas = document.getElementById('rekapKelas').value;
    const startDateStr = document.getElementById('rekapStartDate').value;
    const endDateStr = document.getElementById('rekapEndDate').value;
    if (!kelas || !startDateStr || !endDateStr) { showNotification('⚠️ Pilih kelas dan rentang tanggal!', 'warning'); return; }
    const reportData = generateReportData(kelas, startDateStr, endDateStr, document.getElementById('rekapSearch').value);
    if (reportData.absensi.students.length === 0) { showNotification(`⚠️ Tidak ada siswa untuk diekspor!`, 'warning'); return; }
    
    // Buat workbook baru
    const wb = XLSX.utils.book_new();

    // Sheet untuk data absensi
    const absensiData = [["No", "Nama Siswa", "Hadir", "Sakit", "Izin", "Alpa", "%"]].concat(reportData.absensi.students.map(s => [s.no, s.nama, s.hadir, s.sakit, s.izin, s.alpa, s.persentase]));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(absensiData), "Absensi");

    // Sheet untuk data nilai
    const nilaiData = [["No", "Nama Siswa", "Rata Harian", "Rata Tugas", "Nilai Akhir"]].concat(reportData.nilai.students.map(s => [s.no, s.nama, s.rataRataHarian, s.rataRataTugas, s.nilaiAkhir]));
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(nilaiData), "Nilai");
    
    // Tulis dan unduh file
    XLSX.writeFile(wb, `Laporan_Kelas_${kelas}.xlsx`);
    showNotification(`✅ Laporan berhasil diekspor!`, 'success');
}

function exportData() {
    const dataToExport = { dataSiswa, dataAbsensi, dataNilai, dataMateri, dataRpp, dataJadwal, dataArsip, dataProfil, dataKalender };
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `sim_guru_backup_${new Date().toISOString().split('T')[0]}.json`; a.click();
    URL.revokeObjectURL(url);
    showNotification('📥 Data berhasil diekspor!', 'success');
}

function importData() {
    const file = document.getElementById('importFile').files[0];
    if (!file) { showNotification('⚠️ Pilih file JSON!', 'warning'); return; }
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            if (importedData.dataSiswa === undefined || importedData.dataAbsensi === undefined || importedData.dataNilai === undefined) throw new Error("File tidak valid");
            showModal('Konfirmasi Impor', `Ini akan MENIMPA semua data saat ini. Lanjutkan?`, () => {
                dataSiswa = importedData.dataSiswa || initialDataSiswa;
                dataAbsensi = importedData.dataAbsensi || {};
                dataNilai = importedData.dataNilai || {};
                dataMateri = importedData.dataMateri || {};
                dataRpp = importedData.dataRpp || [];
                dataJadwal = importedData.dataJadwal || {};
                dataArsip = importedData.dataArsip || [];
                dataKalender = importedData.dataKalender || {};
                dataProfil = importedData.dataProfil || {};
                
                localStorage.setItem('dataSiswa', JSON.stringify(dataSiswa));
                localStorage.setItem('dataAbsensi', JSON.stringify(dataAbsensi));
                localStorage.setItem('dataNilai', JSON.stringify(dataNilai));
                localStorage.setItem('dataMateri', JSON.stringify(dataMateri));
                localStorage.setItem('dataRpp', JSON.stringify(dataRpp));
                localStorage.setItem('dataJadwal', JSON.stringify(dataJadwal));
                localStorage.setItem('dataArsip', JSON.stringify(dataArsip));
                localStorage.setItem('dataKalender', JSON.stringify(dataKalender));
                localStorage.setItem('dataProfil', JSON.stringify(dataProfil));

                showNotification('✅ Data berhasil diimpor!', 'success');
                setTimeout(() => window.location.reload(), 1500);
            });
        } catch (e) { showNotification('❌ Gagal memproses file. Pastikan file JSON valid.', 'error'); }
    };
    reader.readAsText(file);
}

function updateDashboard() {
    const kelas = document.getElementById('dashboardKelas').value;
    const dashboardContent = document.getElementById('dashboardContent');
    if (!dashboardContent) return;
    if (!kelas) { dashboardContent.innerHTML = `<div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">📈</div><p>Pilih kelas untuk menampilkan statistik</p></div>`; return; }
    
    const today = new Date();
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
    const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).toISOString().split('T')[0];
    const reportData = generateReportData(kelas, startOfMonth, endOfMonth);
    const { totals } = reportData.absensi;
    const totalKehadiran = totals.hadir + totals.sakit + totals.izin + totals.alpa;
    
    let rataRataNilaiKelas = 0;
    if (reportData.nilai.students.length > 0) {
        const totalNilai = reportData.nilai.students.reduce((acc, s) => acc + parseFloat(s.nilaiAkhir), 0);
        rataRataNilaiKelas = (totalNilai / reportData.nilai.students.length).toFixed(2);
    }

    dashboardContent.innerHTML = `<h3 class="text-xl font-semibold mb-4">Ringkasan Kelas ${kelas} (Bulan Ini)</h3><div class="grid md:grid-cols-2 gap-6"><div class="bg-gray-50 p-4 rounded-xl border"><h4 class="text-lg font-medium mb-2">Statistik Kehadiran</h4>${totalKehadiran > 0 ? '<canvas id="kehadiranChart"></canvas>' : '<p class="text-center text-gray-500 py-10">Belum ada data kehadiran bulan ini.</p>'}</div><div class="bg-gray-50 p-4 rounded-xl border flex flex-col justify-center"><h4 class="text-lg font-medium mb-2">Performa Nilai</h4><div class="text-center py-8"><p class="text-5xl font-bold text-blue-600">${rataRataNilaiKelas}</p><p class="text-gray-500 mt-2">Nilai Akhir Rata-Rata</p></div></div></div>`;
    
    if (totalKehadiran > 0) {
        const ctx = document.getElementById('kehadiranChart').getContext('2d');
        if (kehadiranChart) kehadiranChart.destroy();
        
        const gradientHadir = ctx.createLinearGradient(0, 0, 0, 200); gradientHadir.addColorStop(0, '#6EE7B7'); gradientHadir.addColorStop(1, '#10B981');
        const gradientSakit = ctx.createLinearGradient(0, 0, 0, 200); gradientSakit.addColorStop(0, '#FBBF24'); gradientSakit.addColorStop(1, '#F59E0B');
        const gradientIzin = ctx.createLinearGradient(0, 0, 0, 200); gradientIzin.addColorStop(0, '#93C5FD'); gradientIzin.addColorStop(1, '#3B82F6');
        const gradientAlpa = ctx.createLinearGradient(0, 0, 0, 200); gradientAlpa.addColorStop(0, '#F87171'); gradientAlpa.addColorStop(1, '#EF4444');
        
        kehadiranChart = new Chart(ctx, { 
            type: 'doughnut', 
            data: { 
                labels: ['Hadir', 'Sakit', 'Izin', 'Alpa'], 
                datasets: [{ 
                    data: [totals.hadir, totals.sakit, totals.izin, totals.alpa], 
                    backgroundColor: [gradientHadir, gradientSakit, gradientIzin, gradientAlpa], 
                    hoverOffset: 8,
                    borderColor: '#ffffff',
                    borderWidth: 4
                }] 
            }, 
            options: { 
                responsive: true, 
                plugins: { 
                    legend: { position: 'bottom' } 
                },
                cutout: '70%'
            } 
        });
    }
}

function deleteSiswa(kelas, nisToDelete) {
    showModal('Konfirmasi Hapus', `Yakin ingin menghapus siswa ini? Semua data absensi dan nilai terkait akan dihapus permanen.`, () => {
        dataSiswa[kelas] = dataSiswa[kelas].filter(s => s.nis !== nisToDelete);
        // Perbaikan: Pastikan key absensi dan nilai dihapus dengan benar
        Object.keys(dataAbsensi).forEach(key => {
            const [keyKelas, keyNis] = key.split('_');
            if (keyKelas === kelas && keyNis === nisToDelete) {
                delete dataAbsensi[key];
            }
        });
        Object.keys(dataNilai).forEach(key => {
            const [keyKelas, keyNis] = key.split('_');
            if (keyKelas === kelas && keyNis === nisToDelete) {
                delete dataNilai[key];
            }
        });
        localStorage.setItem('dataAbsensi', JSON.stringify(dataAbsensi));
        localStorage.setItem('dataNilai', JSON.stringify(dataNilai));
        saveDataSiswa();
        showNotification('🗑️ Siswa berhasil dihapus!', 'info');
        updateManajemenTable(kelas);
    });
}

function editSiswa(oldKelas, oldNis, newNama, newJk, newKelas) {
    if (newKelas && newKelas !== oldKelas) {
        const siswaToMove = dataSiswa[oldKelas].find(s => s.nis === oldNis);
        if (siswaToMove) {
            siswaToMove.nama = newNama; siswaToMove.jk = newJk;
            dataSiswa[oldKelas] = dataSiswa[oldKelas].filter(s => s.nis !== oldNis);
            if (!dataSiswa[newKelas]) dataSiswa[newKelas] = [];
            dataSiswa[newKelas].push(siswaToMove);
            
            // Pindahkan data absensi dan nilai
            Object.keys(dataAbsensi).forEach(key => { 
                const p = key.split('_');
                if (p[0] === oldKelas && p[1] === oldNis) {
                    dataAbsensi[`${newKelas}_${p[1]}_${p[2]}`] = dataAbsensi[key];
                    delete dataAbsensi[key];
                }
            });
            Object.keys(dataNilai).forEach(key => { 
                const p = key.split('_');
                if (p[0] === oldKelas && p[1] === oldNis) {
                     // Perbaikan: Pastikan format key baru benar
                     dataNilai[`${newKelas}_${p[1]}_${p[2]}_${p[3]}`] = dataNilai[key];
                     delete dataNilai[key];
                }
            });
            localStorage.setItem('dataAbsensi', JSON.stringify(dataAbsensi));
            localStorage.setItem('dataNilai', JSON.stringify(dataNilai));
            showNotification('🔄 Siswa berhasil dipindah kelas!', 'success');
        }
    } else {
        const siswaIndex = dataSiswa[oldKelas].findIndex(s => s.nis === oldNis);
        if (siswaIndex !== -1) { dataSiswa[oldKelas][siswaIndex].nama = newNama; dataSiswa[oldKelas][siswaIndex].jk = newJk; showNotification('✅ Data siswa diperbarui!', 'success'); }
    }
    saveDataSiswa();
    updateManajemenTable(newKelas || oldKelas);
}

function updateManajemenTable(kelas) {
    const container = document.getElementById('manajemenTableContainer');
    if (!container) return;
    if (!kelas || !dataSiswa[kelas]) { container.innerHTML = `<div class="text-center text-gray-500 py-8"><div class="text-4xl mb-3">🧑‍🎓</div><p>Pilih kelas untuk menampilkan data siswa</p></div>`; return; }
    
    let bodyHtml = '';
    dataSiswa[kelas].forEach((siswa, index) => {
        bodyHtml += `<tr class="hover:bg-gray-50"><td class="p-3 border-b">${index + 1}</td><td class="p-3 border-b font-medium">${siswa.nama}</td><td class="p-3 border-b">${siswa.jk}</td><td class="p-3 border-b text-center"><button onclick="promptEdit('${kelas}', '${siswa.nis}', '${siswa.nama.replace(/'/g, "\\'")}', '${siswa.jk}')" class="text-blue-600 mr-2">✏️ Edit</button><button onclick="deleteSiswa('${kelas}', '${siswa.nis}')" class="text-red-600">🗑️ Hapus</button></td></tr>`;
    });
    container.innerHTML = `<table class="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm"><thead class="bg-gray-50"><tr><th class="p-3 text-left text-sm font-medium">No</th><th class="p-3 text-left text-sm font-medium">Nama Siswa</th><th class="p-3 text-left text-sm font-medium">J/K</th><th class="p-3 text-center text-sm font-medium">Aksi</th></tr></thead><tbody>${bodyHtml}</tbody></table>`;
}

// Perbaikan: Ganti id `modal-kelas` di sini menjadi `modal-kelas-pindah` untuk menghindari duplikasi id
function promptEdit(kelas, oldNis, oldNama, oldJk) {
    const bodyHtml = `<label class="block text-sm font-medium">Nama Siswa</label><input type="text" id="modal-nama" class="mt-1 block w-full p-2 border rounded-md" value="${oldNama}"><label class="block text-sm font-medium mt-4">Jenis Kelamin</label><select id="modal-jk" class="mt-1 block w-full p-2 border rounded-md"><option value="L" ${oldJk === 'L' ? 'selected' : ''}>Laki-laki</option><option value="P" ${oldJk === 'P' ? 'selected' : ''}>Perempuan</option></select><label class="block text-sm font-medium mt-4">Pindah ke Kelas</label><select id="modal-kelas-pindah" class="mt-1 block w-full p-2 border rounded-md"><option value="${kelas}">Jangan Pindah</option>${Object.keys(dataSiswa).sort().filter(k => k !== kelas).map(k => `<option value="${k}">${k}</option>`).join('')}</select>`;
    showModalWithInputs(`Edit Data Siswa`, bodyHtml, () => {
        const newNama = document.getElementById('modal-nama').value;
        if (!newNama) { showNotification('⚠️ Nama harus diisi!', 'warning'); return; }
        editSiswa(kelas, oldNis, newNama, document.getElementById('modal-jk').value, document.getElementById('modal-kelas-pindah').value);
    });
}

function showModal(title, message, onConfirm) {
    const existingModal = document.getElementById('customModal');
    if (existingModal) existingModal.remove();
    let modalHtml = `<div id="customModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full z-[100] flex items-center justify-center p-4"><div class="relative mx-auto p-5 border w-full max-w-md shadow-lg rounded-2xl bg-white"><div class="mt-3 text-center"><h3 class="text-lg font-medium">${title}</h3><div class="mt-2 px-7 py-3"><p class="text-sm text-gray-500">${message}</p></div><div class="items-center px-4 py-3 flex gap-3"><button id="cancelBtn" class="p-2 bg-gray-200 rounded-md w-full">Batal</button><button id="confirmBtn" class="p-2 bg-red-500 text-white rounded-md w-full">Hapus</button></div></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const closeModal = () => document.getElementById('customModal').remove();
    document.getElementById('confirmBtn').onclick = () => { onConfirm(); closeModal(); };
    document.getElementById('cancelBtn').onclick = closeModal;
}

function showModalWithInputs(title, bodyHtml, onSave) {
    const existingModal = document.getElementById('customModal');
    if (existingModal) existingModal.remove();
    let modalHtml = `<div id="customModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 h-full w-full z-[100] flex items-center justify-center p-4"><div class="relative mx-auto p-5 border w-full max-w-md shadow-lg rounded-2xl bg-white"><div class="mt-3"><h3 class="text-lg font-medium text-center">${title}</h3><div class="mt-4 px-4 py-3 text-left space-y-4">${bodyHtml}</div><div class="items-center px-4 py-3 flex gap-3 mt-4"><button id="cancelBtn" class="p-2 bg-gray-200 rounded-md w-full">Batal</button><button id="saveBtn" class="p-2 bg-blue-500 text-white rounded-md w-full">Simpan</button></div></div></div></div>`;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const closeModal = () => document.getElementById('customModal').remove();
    document.getElementById('saveBtn').onclick = () => { onSave(); closeModal(); };
    document.getElementById('cancelBtn').onclick = closeModal;
}

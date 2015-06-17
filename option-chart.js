$(function () {
    $('#chart').highcharts({
        chart: {zoomType: 'x'},
        title: {text: 'WoW Token Prices'},
        credits: {enabled: false},
        legend: {enabled: false},
        xAxis: {type: 'datetime'},
        yAxis: {title: {text: 'Gold'}},
        series: [{
            pointInterval: 60 * 60 * 1000, // 1 hour
            pointStart: 1428426758,
            data: [30000, 30300, 30603, 30909, 31218, 30906, 31215, 30903, 29685, 29094, 28515, 27948, 27392, 27118, 26847, 26579, 26313, 26050, 25790, 25532, 25277, 25024, 24774, 24526, 24281, 24038, 23798, 23560, 23324, 23091, 22860, 22631, 22405, 22181, 21959, 21739, 21522, 21307, 21094, 20883, 20674, 20467, 20370, 20574, 20780, 20988, 21198, 21410, 21624, 21840, 22058, 22279, 22502, 22727, 22954, 23184, 23416, 23650, 23887, 24126, 24367, 24611, 24857, 25106, 25357, 25611, 25867, 26126, 26387, 26651, 26918, 26977, 26753, 26485, 26220, 25958, 25698, 25441, 25187, 24935, 24686, 24439, 24195, 23953, 23713, 22779, 22551, 22325, 22102, 21881, 21662, 21445, 21659, 21876, 22095, 22316, 22539, 22764, 22992, 23222, 23454, 23689, 23926, 24165, 24407, 24260, 24017, 23777, 23539, 23304, 23071, 22840, 22612, 22386, 22162, 21940, 21721, 21504, 21289, 21076, 20865, 20656, 20863, 21072, 21283, 21496, 21711, 21928, 22147, 22368, 22592, 22818, 23046, 23276, 23509, 23744, 23549, 23314, 23081, 22850, 22622, 22396, 22172, 21950, 21731, 21514, 21299, 21239, 21451, 21666, 21883, 22102, 22323, 22546, 22771, 22999, 23229, 23461, 23694, 23457, 23222, 22990, 22760, 22532, 22307, 22084, 21863, 21644, 21428, 21214, 21141, 21352, 21566, 21782, 22000, 22220, 22442, 22666, 22893, 23122, 23353, 23587, 23823, 24061, 24232, 24310, 24194, 24004, 23764, 23526, 23291, 23058, 22827, 22599, 22373, 22149, 21928, 21709, 21492, 21356, 21341, 21430, 21624, 21840, 22058, 22279, 22502, 22727, 22954, 23184, 23416, 23650, 23887, 24067, 24205, 24303, 24382, 24407, 24359, 24180, 23938, 23699, 23462, 23227, 22995, 22765, 22537, 22312, 22089, 21868, 21649, 21433, 21306, 21376, 21590, 21806, 22024, 22244, 22466, 22691, 22918, 23147, 23378, 23612, 23836, 24011, 24124, 24178, 23982, 23742, 23505, 23270, 23037, 22807, 22579, 22353, 22129, 21908, 21689, 21472, 21257, 21044, 20834, 20626, 20420, 20296, 20496, 20701, 20908, 21117, 21328, 21541, 21756, 21974, 22194, 22416, 22640, 22866, 23095, 23326, 23518, 23629, 23697, 23687, 23634, 23541, 23412, 23256, 23029, 22799, 22571, 22345, 22122, 21901, 21682, 21465, 21250, 21038, 20901, 20975, 21157, 21369, 21583, 21799, 22017, 22237, 22459, 22684, 22911, 23140, 23371, 23605, 23841, 24079, 24320, 24506, 24622, 24678, 24667, 24443, 24199, 23957, 23717, 23480, 23245, 23013, 22783, 22555, 22329, 22106, 21885, 21666, 21449, 21235, 21023, 20813, 20605, 20399, 20272, 20475, 20680, 20887, 21096, 21307, 21520, 21735, 21952, 22172, 22394, 22618, 22844, 23072, 23303, 23536, 23771, 24009, 24249, 24491, 24693, 24845, 24951, 24961, 24855, 24606, 24360, 24116, 23875, 23636, 23400, 23166, 22934, 22705, 22478, 22253, 22030, 21810, 21592, 21387, 21252, 21164, 21133, 21138, 21173, 21227, 21323, 21459, 21650, 21858, 22077, 22298, 22521, 22735, 22910, 23066, 23168, 23194, 23115, 22921, 22692, 22465, 22240, 22018, 21798, 21580, 21364, 21150, 20939, 20730, 20523, 20384, 20421, 20611, 20817, 21025, 21235, 21431, 21625, 21823, 22024, 22212, 22399, 22580, 22760, 22925, 23088, 23242, 23385, 23521, 23652, 23777, 23860, 23927, 23978, 24007, 24012, 23997, 23968, 23929, 23880, 23820, 23753, 23636, 23503, 23363, 23219, 23070, 22917, 22757, 22567, 22378, 22189, 21996, 21807, 21619, 21422, 21231, 21043, 20860, 20687, 20525, 20380, 20239, 20109, 20000, 19907, 19835, 19795, 19784, 19799, 19849, 19935, 20056, 20205, 20372, 20559, 20762, 20969, 21179, 21391, 21605, 21821, 22039, 22259, 22481, 22701, 22921, 23122, 23296, 23464, 23629, 23788, 23944, 24089, 24223, 24344, 24453, 24546, 24615, 24617, 24601, 24564, 24511, 24443, 24363, 24269, 24128, 23944, 23757, 23564, 23359, 23131, 22900, 22671, 22444, 22220, 22004, 21793, 21581, 21377, 21182, 21000, 20830, 20673, 20545, 20430, 20328, 20244, 20170, 20105, 20058, 20020, 19989, 19951, 19927, 19913, 19912, 19921, 19943, 19974, 20017, 20076, 20140, 20221, 20311, 20405, 20516, 20641, 20774, 20923, 21090, 21267, 21451, 21642, 21839, 22042, 22245, 22433, 22623, 22811, 23005, 23196, 23382, 23557, 23699, 23832, 23957, 24080, 24194, 24293, 24379, 24458, 24525, 24580, 24626, 24660, 24690, 24709, 24722, 24728, 24726, 24714, 24694, 24609, 24455, 24288, 24105, 23913, 23720, 23515, 23303, 23091, 22878, 22650, 22424, 22201, 21979, 21759, 21541, 21326, 21113, 20902, 20693, 20486, 20281, 20078, 19877, 19678, 19482, 19311, 19161, 19040, 18946, 18890, 18889, 18930, 19018, 19158, 19329, 19522, 19717, 19914, 20113, 20314, 20517, 20722, 20929, 21138, 21349, 21561, 21776, 21994, 22214, 22435, 22658, 22881, 23102, 23322, 23541, 23749, 23955, 24155, 24347, 24530, 24702, 24847, 24981, 25095, 25180, 25250, 25298, 25333, 25330, 25309, 25272, 25222, 25158, 25064, 24945, 24816, 24684, 24548, 24407, 24264, 24118, 23942, 23768, 23594, 23415, 23236, 23052, 22862, 22674, 22489, 22297, 22106, 21918, 21728, 21542, 21359, 21154, 20954, 20761, 20553, 20347, 20150, 19949, 19750, 19568, 19373, 19226, 19124, 19091, 19114, 19203, 19359, 19553, 19749, 19946, 20145, 20346, 20549, 20754, 20962, 21171, 21383, 21597, 21813, 22031, 22251, 22474, 22695, 22920, 23149, 23380, 23613, 23849, 24083, 24311, 24517, 24718, 24914, 25095, 25267, 25433, 25593, 25747, 25882, 26004, 26119, 26228, 26324, 26393, 26454, 26507, 26551, 26590, 26607, 26604, 26593, 26569, 26535, 26492, 26431, 26362, 26283, 26170, 26046, 25914, 25718, 25519, 25309, 25056, 24805, 24557, 24311, 24068, 23827, 23589, 23353, 23119, 22888, 22659, 22432, 22208, 21986, 21766, 21548, 21333, 21120, 20909, 20700, 20493, 20321, 20185, 20091, 20089, 20132, 20223, 20366, 20550, 20756, 20964, 21174, 21386, 21600, 21816, 22034, 22247, 22467, 22692, 22919, 23148, 23379, 23612, 23820, 24025, 24226, 24427, 24626, 24823, 25022, 25219, 25412, 25602, 25790, 25976, 26116, 26250, 26377, 26501, 26619, 26729, 26830, 26924, 27004, 27068, 27109, 27140, 27161, 27171, 27173, 27161, 27136, 27092, 27007, 26906, 26788, 26661, 26526, 26376, 26218, 26052, 25872, 25684, 25488, 25233, 24981, 24731, 24484, 24239, 23997, 23757, 23519, 23284, 23051, 22820, 22592, 22366, 22142, 21921, 21702, 21485, 21270, 21057, 20846, 20638, 20432, 20228, 20026, 19826, 19634, 19534, 19587, 19704, 19881, 20080, 20281, 20484, 20689, 20895, 21099, 21310, 21523, 21734, 21948, 22164, 22381, 22599, 22820, 23036, 23248, 23461, 23674, 23886, 24096, 24304, 24511, 24715, 24917, 25107, 25279, 25443, 25602, 25747, 25884, 26014, 26137, 26249, 26346, 26433, 26458, 26470, 26465, 26443, 26410, 26352, 26279, 26195, 26099, 25980, 25851, 25712, 25555, 25373, 25181, 24966, 24725, 24480, 24235, 23993, 23753, 23515, 23280, 23047, 22817, 22589, 22363, 22139, 21918, 21699, 21482, 21267, 21054, 20843, 20635, 20429, 20225, 20023, 19823, 19625, 19429, 19235, 19043, 18901, 18805, 18747, 18761, 18815, 18895, 19009, 19140, 19286, 19445, 19615, 19797, 19990, 20190, 20392, 20596, 20802, 21010, 21220, 21432, 21646, 21862, 22081, 22302, 22509, 22715, 22923, 23131, 23337, 23540, 23742, 23923, 24271, 24437, 24599, 24742, 24865, 24980, 25090, 25189, 25277, 25350, 25410, 25460, 25500, 25527, 25522, 25466, 25399, 25322, 25238, 25145, 25042, 24896, 24731, 24561, 24367, 24169, 23962, 23740, 23510, 23280, 23047, 22817, 22589, 22363, 22139, 21918, 21699, 21482, 21267, 21054, 20843, 20635, 20429, 20225, 20023, 19823, 19625, 19429, 19235, 19043, 18853, 18664, 18477, 18292, 18109, 17964, 17907, 17971, 18115, 18296, 18479, 18664, 18851, 19040, 19230, 19422, 19616, 19812, 20010, 20210, 20412, 20616, 20822, 21030, 21240, 21452, 21667, 21884, 22103, 22324, 22545, 22746, 22951, 23155, 23360, 23565, 23768, 23949, 24129, 24303, 24476, 24644, 24810, 24971, 25108, 25225, 25337, 25438, 25529, 25608, 25679, 25729, 25742, 25745, 25742, 25730, 25714, 25693, 25662, 25622, 25551, 25469, 25383, 25290, 25183, 25073, 24962, 24833, 24701, 24566, 24411, 24255, 24099, 23910, 23723, 23539, 23304, 23071, 22840, 22612, 22386, 22162, 21940, 21721, 21504, 21289, 21076, 20865, 20656, 20449, 20245, 20043, 19843, 19648, 19545, 19496, 19482, 19539, 19645, 19794, 19989, 20189, 20391, 20595, 20799, 21007, 21217, 21429, 21643, 21859, 22068, 22286, 22505, 22730, 22953, 23177, 23404, 23635, 23869, 24085, 24297, 24508, 24713, 24912, 25108, 25485, 25639, 25769, 25878, 25975, 26067, 26144, 26209, 26266, 26319, 26367, 26408, 26446, 26480, 26510, 26537, 26558, 26574, 26579, 26543, 26498, 26377, 26313, 26247, 26167, 26080, 25988, 25882, 25769, 25652, 25502, 25333, 25161, 24966, 24765, 24564, 24324, 24084, 23846, 23608, 23372, 23138, 22907, 22678, 22451, 22226, 22004, 21784, 21566, 21350, 21137, 20926, 20717, 20510, 20305, 20102, 19919, 19878, 19912, 20035, 20207, 20406, 20607, 20810, 21016, 21223, 21433, 21644, 21857, 22072, 22287, 22507, 22729, 22953, 23179, 23408, 23639, 23869, 24085, 24302, 24519, 24735, 24951, 25151, 25348, 25544, 25738, 25931, 26124, 26312, 26493, 26670, 26844, 27015, 27176, 27327, 27428, 27512, 27582, 27638, 27683, 27715, 27731, 27685, 27624, 27544, 27451, 27322, 27175, 26848, 26644, 26434, 26220, 25995, 25766, 25535, 25290, 25038, 24788, 24540, 24295, 24052, 23811, 23573, 23337, 23104, 22873, 22644, 22418, 22194, 21972, 21752, 21534, 21319, 21106, 20895, 20686, 20479, 20274, 20071, 19895, 19787, 19757, 19828, 19951, 20119, 20310, 20510, 20712, 20915, 21121, 21329, 21539, 21751, 21965, 22180, 22397, 22618, 22840, 23065, 23292, 23519, 23751, 23985, 24220, 24456, 24691, 24926, 25162, 25398, 25631, 25862, 26089, 26293, 26479, 26657, 26827, 26990, 27137, 27256, 27360, 27452, 27530, 27577, 27596, 27598, 27576, 27532, 27466, 27382, 27284, 27174, 27051, 26780, 26512, 26247, 25985, 25725, 25468, 25213, 24961, 24711, 24464, 24219, 23977, 23737, 23500, 23265, 23032, 22802, 22574, 22348, 22125, 21904, 21685, 21468, 21253, 21040, 20830, 20622, 20416, 20212, 20010, 19810, 19612, 19416, 19222, 19030, 18840, 18652, 18465, 18280, 18174, 18155, 18234, 18416, 18600, 18786, 18974, 19164, 19356, 19550, 19746, 19943, 20142, 20343, 20546, 20751, 20959, 21169, 21381, 21595, 21811, 22029, 22249, 22471, 22696, 22923, 23152, 23369, 23588, 23812, 24032, 24233, 24420, 24586, 24737, 24877, 25006, 25094, 25131, 25122, 25080, 24978, 24850, 24687, 24507, 24318, 24099, 23858, 23619, 23383, 23149, 22918, 22689, 22462, 22237, 22015, 21795, 21577, 21364, 21165, 20965, 20787, 20628, 20479, 20355, 20260, 20173, 20108, 20062, 20031, 20026, 20040, 20075, 20068, 20072, 20111, 20178, 20269, 20394, 20554, 20752, 20960, 21170, 21382, 21596, 21812, 22030, 22250, 22473, 22698, 22925, 23154, 23386, 23620, 23820, 24008, 24190, 24355, 24490, 24556, 24595, 24618, 24632, 24630, 24618, 24588, 24541, 24487, 24422, 24341, 24252, 24148, 23945, 23706, 23469, 23234, 23002, 22772, 22544, 22319, 22096, 21875, 21656, 21439, 21225, 21013, 20803, 20605, 20445, 20321, 20211, 20140, 20106, 20107, 20131, 20188, 20269, 20371, 20473, 20587, 20709, 20840, 20984, 21139, 21300, 21469, 21641, 21813, 21992, 22184, 22370, 22554, 22738, 22926, 23123, 23324, 23520, 23714, 23898, 24065, 24212, 24348, 24462, 24554, 24574, 24565, 24537, 24493, 24427, 24348, 24253, 24131, 23995, 23830, 23612, 23376, 23142, 22911, 22682, 22455, 22230, 22008, 21788, 21570, 21354, 21169, 21010, 20878, 20795, 20762, 20790, 20872, 21007, 21174, 21371, 21585, 21801, 21971, 22139, 22315, 22498, 22678, 22840, 22998, 23162, 23327, 23489, 23654, 23816, 23978, 24136, 24292, 24443, 24593, 24737, 24848, 24943, 25032, 25103, 25170, 25222, 25266, 25273, 25263, 25248, 25217, 25170, 25102, 25010, 24872, 24725, 24566, 24399, 24227, 24045, 23863, 23689, 23471, 23236, 23004, 22774, 22546, 22321, 22098, 21877, 21676, 21492, 21311, 21143, 21004, 20901, 20838, 20834, 20881, 20969, 21110, 21282, 21479, 21694, 21911, 22130, 22348, 22571, 22797, 23025, 23255, 23488, 23723, 23960, 24200, 24429, 24601, 24765, 24920, 25044, 25152, 25243, 25332, 25412, 25481, 25545, 25579, 25582, 25570, 25552, 25518, 25415, 25328, 25211, 25076, 24922, 24762, 24597, 24371, 24127, 23886, 23647, 23414, 23180, 22948, 22719, 22492, 22267, 22072, 21886, 21716, 21570, 21471, 21408, 21383, 21399, 21459, 21559, 21698, 21880, 22079, 22273, 22477, 22695, 22914, 23132, 23347, 23761, 23972, 24185, 24387, 24582, 24773, 24962, 25144, 25307, 25446, 25572, 25685, 25787, 25861, 25926, 25963, 25956, 25912, 25854, 25783, 25691, 25579, 25460, 25304, 25142, 24967, 24782, 24596, 24380, 24141, 23905, 23666, 23446, 23217, 22985, 22755, 22539, 22383, 22223, 21632, 21470, 21399, 21394, 21450, 21535, 21630, 21742, 21866, 22005, 22161, 22329, 22498, 22679, 22817, 22998, 23179, 23367, 23521, 23666, 23796, 23924, 24054, 24193, 24210, 24106, 24002, 23926, 23919, 23906, 23884, 23848, 23751, 23627, 23512, 23422, 23353, 23287, 23186, 23077, 22969, 22841, 22721, 22607, 22533, 22478, 22462, 22467, 22473, 22471, 22486, 22505, 22555, 22623, 22712, 22734, 22740, 22748, 22821, 22907, 23011, 23092, 23182, 23269, 23286, 23283, 23252, 23243, 23248, 23275, 23313, 23329, 23239, 23129, 23017, 22917, 22794, 22711, 22656, 22658, 22674, 22698, 22680, 22684, 22688, 22761, 22845, 22987, 23006, 22965, 22920, 22959, 23029, 23088, 23173, 23281, 23383, 23456, 23512, 23572, 23634, 23685, 23722, 23636, 23504, 23337, 23170, 22998, 22869, 20912, 20779, 20790, 20901, 21060, 21237, 21437, 21651, 21868, 22087, 22308, 22531, 22756, 22984, 23214, 23446, 23676, 23798, 23854, 23906, 23985, 24041, 24036, 24022, 23901, 23749, 23570, 23388, 23204, 22995, 22786, 22585, 22362, 22143, 21938, 21842, 21819, 21850, 21931, 22031, 22138, 22242, 22314, 22389, 22451, 22454, 22349, 22208, 22065, 21951, 21936, 21959, 22000, 21924, 21869, 21836, 21879, 21922, 21964, 22000, 21976, 21965, 21954, 21970, 21994, 22034, 22083, 22128, 22174, 22226, 22298, 22389, 22467, 22532, 22594, 22590, 22476, 22352, 22264, 22253, 22293, 22280, 22206, 22084, 22011, 22000, 22052, 22116, 22176, 22220, 22273, 22316, 22363, 22420, 22479, 22587, 22695, 22824, 22905, 22755, 22589, 22423, 22245, 22095, 21970, 21931, 21932, 21977, 21866, 21799, 21675, 21693, 21712, 21804, 21917, 22044, 22174, 22159, 22047, 21934, 21902, 21916, 21846, 21814, 21803, 21866, 21909, 21950, 21984, 22025, 22070, 22123, 22108, 22006, 21908, 21868, 21895, 21910, 21938, 21984, 22064, 22161, 22263, 22341, 22358, 22375, 22376, 22398, 22436, 22450, 22483, 22509, 22571, 22655, 22736, 22713, 22660, 22602, 22636, 22676, 22749, 22811, 22875, 22903, 22928, 22784, 22631, 22486, 22416, 22394, 22326, 22224, 22117, 22027, 22003, 22028, 22096, 22186, 22296, 22397, 22252, 22111, 21982, 22043, 22159, 22284, 22412, 22431, 22442, 22451, 22471, 22395, 22330, 22261, 22251, 22220, 22215, 22219, 22245, 22281, 22317, 22336, 22272, 22209, 22148, 22143, 22150, 22154, 22140, 22138, 22148, 22167, 22168, 22167, 22190, 22201, 22234, 22269, 22329, 22392, 22484, 22567, 22640, 22701, 22781, 22857, 22956, 23078, 23181, 23270, 23264, 23202, 23142, 23128, 23149, 23188, 23220, 23250, 23261, 23283, 23300, 23335, 23338, 23276, 23110, 22930, 22751, 22622, 22569, 22542, 22360, 22181, 22001, 21896, 21866, 21953, 22065, 22194, 22305, 22331, 22320, 22360, 22447, 22571, 22687, 22791, 22784, 22779, 22785, 22854, 22922, 22975, 23011, 23032, 23053, 23084, 23102, 23127, 23159, 23218, 23238, 23226, 23205, 23179, 23176, 23180, 23198, 23226, 23229, 23254, 23240, 23226, 23207, 23226, 23253, 23290, 23339, 23277, 23188, 23106, 23067, 23054, 23053, 22985, 22931, 22898, 22935, 22950, 22929, 22905, 22932, 23006, 23065, 23119, 22979, 22856, 22781, 22871, 22995, 23003, 22940, 22906, 22858, 22849, 22845, 22941, 22952, 22960, 22980, 23064, 23034, 22988, 22958, 23021, 23077, 23104, 23110, 23126, 23150, 23003, 22850, 22697, 22564, 22448, 22358, 22311, 22283, 22254, 22235, 22224, 22231, 22220, 22235, 22263, 22316, 22369, 22412, 22398, 22384, 22372, 22357, 22355, 22370, 22391, 22441, 22522, 22636, 22762, 22902, 23055, 23136, 23179, 23191, 23209, 23194, 23192, 23209, 23243, 23292, 23255, 23228, 23188, 23224, 23268, 23154, 23014, 22874, 22852, 22763, 22712, 22698, 22775, 22884, 22880, 22895, 22943, 23075, 23168, 23237, 23152, 23077, 22986, 23041, 23120, 23170, 23021, 22876, 22747, 22754, 22791, 22818, 22859, 22883, 22896, 22907, 22931, 22971, 23012, 22881, 22741, 22605, 22583, 22574, 22586, 22614, 22635, 22589, 22560, 22505, 22477, 22459, 22481, 22522, 22559, 22612, 22686, 22662, 22627, 22590, 22600, 22611, 22636, 22669, 22709, 22755, 22784, 22823, 22859, 22855, 22865, 22857, 22887, 22889, 22904, 22951, 23017, 23083, 23080, 22949, 22827, 22739, 22715, 22686, 22657, 22701, 22787, 22793, 22820, 22860, 22965, 23073, 23047, 22947, 22856, 22797, 22746, 22717, 22721, 22718, 22690, 22671, 22673, 22691, 22702, 22712, 22734, 22767, 22805, 22833, 22856, 22832, 22693, 22556, 22445, 22406, 22370, 22331, 22284, 22244, 22175, 22083, 22006, 21995, 22048, 22131, 22229, 22314, 22288, 22251, 22222, 22277, 22327, 22346, 22278, 22200, 22137, 22178, 22251, 22326, 22360, 22385, 22444, 22530, 22620, 22597, 22550, 22541, 22631, 22737, 22735, 22710, 22640, 22590, 22536, 22506, 22537, 22595, 22679, 22727, 22583, 22437, 22299, 22297, 22346, 22390, 22438, 22486, 22330, 22182, 22042, 22061, 22028, 22032, 22067, 22168, 22249, 22297, 22158, 22024, 21915, 21937, 21974, 22005, 22013, 22024, 22042, 22004, 21965, 21951, 22018, 22115, 22199, 22292, 22411, 22546, 22583, 22585, 22565, 22566, 22560, 22581, 22650, 22759, 22878, 22974, 23033, 23084, 23128, 23179, 23017, 22851, 22683, 22502, 22316, 22138, 22030, 21915, 21843, 21842, 21841, 21855, 21891, 22000, 22123, 22204, 22278, 22328, 22403, 22479, 22537, 22566, 22605, 22479, 22389, 22315, 22400, 22482, 22393, 22256, 22120, 22086, 22110, 22157, 22202, 22241, 22280, 22321, 22361, 22419, 22415, 22269, 22124, 21984, 21907, 21851, 21822, 21839, 21880, 21912, 21964, 22030, 22094, 22164, 22218, 22291, 22364, 22468, 22593, 22714, 22823, 22892, 22881, 22859, 22855, 22915, 22983, 23030, 23054, 22922, 22785, 22654, 22671, 22709, 22749, 22756, 22771, 22770, 22668, 22492, 22323, 22155, 22024, 21883, 21872, 21966, 22071, 22183, 22276, 22358, 22472, 22577, 22676, 22677, 22546, 22409, 22276, 22261, 22309, 22370, 22457, 22561, 22670, 22767, 22831, 22892, 22811, 22661, 22517, 22373, 22268, 22159, 22066, 22019, 21960, 21887, 21848, 21834, 21864, 21907, 21945, 22010, 22080, 22143, 22181, 22241, 22325, 22424, 22457, 22493, 22552, 22645, 22698, 22750, 22834, 22961, 23076, 23165, 23213, 23244, 23292, 23325, 23172, 23007, 22839, 22673, 22561, 22489, 22451, 22263, 22079, 21912, 21940, 22033, 22143, 22163, 22093, 22004, 22060, 22186, 22235, 22296, 22371, 22514, 22557, 22627, 22712, 22869, 23041, 23205, 23342, 23431, 23320, 23198, 23076, 23014, 22986, 22872, 22804, 22754, 22764, 22715, 22667, 22614, 22587, 22549, 22507, 22447, 22382, 22327, 22301, 22287, 22264, 22214, 22180, 22201, 22211, 22201, 22192, 22228, 22275, 22352, 22413, 22458, 22499, 22555, 22635, 22706, 22815, 22943, 23094, 23188, 23181, 23170, 23167, 23214, 23256, 23172, 23092, 23023, 23018, 23013, 22992, 22952, 22819, 22681, 22584, 22558, 22603, 22533, 22514, 22469, 22516, 22572, 22685, 22823, 22968, 23098, 23203, 23304, 23428, 23563, 23461, 23313, 23161, 23012, 22953, 22898, 22796, 22710, 22653, 22630, 22508, 22399, 22310, 22261, 22223, 22200, 22213, 22217, 22211, 22216, 22235, 22264, 22295, 22270, 22253, 22240, 22272, 22313, 22365, 22427, 22468, 22509, 22563, 22627, 22703, 22753, 22813, 22876, 22961, 23075, 23195, 23281, 23275, 23239, 23212, 23137, 23067, 22999, 22984, 22966, 22967, 22980, 22913, 22876, 22821, 22770, 22710, 22686, 22718, 22784, 22884, 22880, 22892, 22907, 23004, 23098, 23166, 23221, 23278, 23356, 23434, 23504, 23574, 23645, 23712, 23744, 23775, 23562, 23352, 23141, 22935, 22717, 22502, 22293, 22128, 22005, 21912, 21819, 21703, 21613, 21549, 21520, 21509, 21558, 21647, 21755, 21873, 22008, 22148, 22270, 22370, 22494, 22632, 22797, 22974, 23150, 23315, 23422, 23513, 23451, 23376, 23313, 23338, 23298, 23223, 23147, 23115, 23055, 22970, 22900, 22863, 22815, 22723, 22625, 22570, 22598, 22658, 22689, 22634, 22567, 22548, 22614, 22587, 22562, 22554, 22642, 22769, 22913, 23066, 23032, 22969, 22899, 22935, 23000, 23079, 23164, 23225, 23260, 23297, 23311, 23200, 23084, 22997, 23003, 23022, 22885, 22715, 22548, 22382, 22287, 22208, 22151, 22099, 21989, 21861, 21742, 21701, 21719, 21770, 21845, 21960, 22086, 22173, 22234, 22298, 22403, 22528, 22584, 22629, 22654, 22717, 22780, 22860, 22889, 22881, 22875, 22901, 22912, 22920, 22924, 22973, 23013, 23052, 22971, 22893, 22823, 22813, 22820, 22854, 22902, 22799, 22649, 22505, 22379, 22252, 22126, 21995, 21931, 21974, 22090, 22222, 22367, 22523, 22683, 22744, 22619, 22501, 22395, 22422, 22459, 22501, 22564, 22422, 22283, 22148, 22141, 22152, 22184, 22215, 22259, 22288, 22256, 22121, 21996, 21940, 21972, 21966, 21964, 21980, 22055, 22138, 22209, 22266, 22281, 22285, 22337, 22409, 22503, 22615, 22718, 22690, 22644, 22629, 22686, 22716, 22653, 22582, 22543, 22554, 22588, 22488, 22345, 22201, 22148, 22063, 21994, 21990, 22106, 22185, 22201, 22196, 22224, 22259, 22357, 22488, 22629, 22725, 22593, 22461, 22336, 22339, 22370, 22412, 22481, 22551, 22614, 22674, 22753, 22614, 22462, 22315, 22248, 22208, 22195, 22198, 22232, 22285, 22349, 22198, 22053, 21914, 21915, 21919, 21905, 21845, 21804, 21775, 21797, 21827, 21868, 21909, 21987, 22115, 22251, 22391, 22474, 22576, 22664, 22713, 22752, 22791, 22817, 22850, 22920, 23040, 23185, 23193, 23161, 23086, 23067, 23063, 23056, 22916, 22752, 22595, 22458, 22288, 22116, 21939, 21870, 21853, 21939, 22050, 22176, 22315, 22424, 22405, 22389, 22431, 22574, 22731, 22897, 22914, 22923, 22939, 23071, 23196, 23292, 23353, 23228, 23106, 22993, 23002, 23010, 23003, 23011, 22860, 22709, 22553, 22445, 22361, 22321, 22295, 22251, 22204, 22138, 22084, 22047, 22032, 22030, 22062, 22103, 22136, 22173, 22240, 22325, 22409, 22478, 22557, 22665, 22758, 22817, 22880, 22974, 23101, 23215, 23328, 23436, 23522, 23498, 23407, 23312, 23269, 23265, 23141, 23028, 22911, 22872, 22864, 22922, 22997, 22916, 22785, 22641, 22607, 22620, 22694, 22677, 22612, 22539, 22563, 22648, 22751, 22725, 22660, 22634, 22698, 22825, 22973, 23130, 23288, 23193, 23068, 22946, 22935, 22969, 22996, 22952, 22906, 22892, 22934, 22978, 22962, 22903, 22835, 22821, 22834, 22844, 22814, 22794, 22788, 22813, 22816, 22839, 22831, 22819, 22800, 22804, 22837, 22894, 22975, 23052, 23071, 23105, 23139, 23205, 23248, 23282, 23309, 23344, 23391, 23311, 23190, 23067, 23044, 23050, 23055, 23020, 22878, 22762, 22690, 22704, 22666, 22661, 22702, 22795, 22797, 22793, 22801, 22910, 22964, 22970, 22972, 23008, 23088, 23178, 23065, 22968, 22908, 23005, 23099, 23064, 22988, 22980, 23070, 23181, 23266, 23332, 23386, 23413, 23278, 23144, 23014, 22989, 22969, 22897, 22850, 22794, 22779, 22762, 22757, 22754, 22751, 22786, 22836, 22869, 22884, 22906, 22974, 23036, 23106, 23126, 23138, 23137, 23143, 23138, 23123, 23150, 23176, 23218, 23250, 23313, 23396, 23416, 23396, 23339, 23290, 23231, 23158, 23099, 23013, 22957, 22920, 22874, 22836, 22815, 22785, 22781, 22815, 22878, 22949, 22999, 23058, 23121, 23187, 23250, 23238, 23189, 23149, 23100, 23083, 23097, 23172, 23273, 23229, 23172, 23080, 23038, 22997, 23003, 23058, 23013, 22943, 22865, 22857, 22875, 22902, 22918, 22927, 22923, 22933, 22900, 22869, 22845, 22858, 22885, 22836, 22752, 22689, 22701, 22770, 22817, 22843, 22856, 22893, 22977, 23058, 23154, 23203, 23197, 23183, 23199, 23257, 23321, 23264, 23214, 23156, 23177, 23150, 23130, 23139, 23189, 23250, 23301, 23288, 23236, 23209, 23178, 23078, 22944, 22842, 22816, 22841, 22890, 22976, 23003, 23017, 23080, 23010, 22962, 22922, 22938, 22981, 23058, 23190, 23322, 23411, 23467, 23536, 23539, 23401, 23265, 23125, 23074, 23039, 23045, 23055, 23057, 22971, 22891, 22840, 22851, 22873, 22889, 22901, 22914, 22941, 22987, 23045, 23089, 23112, 23138, 23166, 23213, 23264, 23122, 22984, 22849, 22806, 22798, 22872, 23003, 23076, 23096, 23091, 23106, 23149, 23208, 23297, 23308, 23292, 23271, 23244, 23205, 23144, 23087, 23025, 22975, 22863, 22797, 22740, 22711, 22683, 22663, 22694, 22775, 22912, 23063, 23223, 23385, 23494, 23593, 23699, 23805, 23918, 23996, 24042, 24049, 24036, 23989, 23958, 23946, 23950, 23933, 23914, 23910, 23820, 23582, 23346, 23113, 22882, 22653, 22426, 22205, 22017, 21815, 21649, 21487, 21387, 21350, 21399, 21482, 21607, 21761, 21939, 22139, 22360, 22584, 22810, 23038, 23259, 23470, 23694, 23904, 24124, 24310, 24244, 24166, 24079, 24062, 24039, 24031, 23926, 23768, 23604, 23440, 23269, 23133, 22986, 22930, 22792, 22676, 22601, 22631, 22652, 22692, 22812, 22944, 23083, 23212, 23327, 23451, 23588, 23722, 23844, 23944, 24013, 24018, 23858, 23674, 23492, 23313, 23222, 23143, 23064, 22980, 22927, 22907, 22890, 22877, 22876, 22857, 22682, 22510, 22343, 22262, 22200, 22134, 22093, 22109, 22181, 22259, 22345, 22416, 22492, 22569, 22693, 22811, 22952, 23099, 23226, 23304, 23347, 23414, 23452, 23501, 23451, 23454, 23392, 23356, 23347, 23413, 23451, 23467, 23484, 23507, 23543, 23591, 23645, 23717, 23776, 23802, 23836, 23671, 23501, 23333, 23234, 23152, 23111, 23124, 23153, 23020, 22889, 22825, 22827, 22880, 22990, 23120, 23173, 23185, 23167, 23219, 23280, 23372, 23465, 23569, 23671, 23764, 23738, 23655, 23552, 23507, 23485, 23472, 23467, 23466, 23449, 23441, 23417, 23416, 23433, 23464, 23520, 23590, 23645, 23676, 23712, 23749, 23771, 23770, 23783, 23816, 23862, 23897, 23948, 23942, 23886, 23836, 23824, 23869, 23896, 23956, 23996, 24077, 24136, 24193, 24216, 24224, 24238, 24067, 23899, 23736, 23695, 23696, 23710, 23725, 23747, 23766, 23715, 23547, 23390, 23292, 23310, 23270, 23259, 23294, 23373, 23492, 23614, 23766, 23924, 23928, 23864, 23819, 23848, 23836, 23808, 23806, 23848, 23876, 23861, 23854, 23856, 23867, 23847, 23813, 23782, 23769, 23771, 23783, 23807, 23791, 23769, 23739, 23703, 23653, 23627, 23647, 23685, 23676, 23659, 23621, 23620, 23639, 23689, 23751, 23823, 23928, 24015, 24046, 24070, 24084, 24123, 24145, 24167, 24081, 23986, 23915, 23921, 23964, 24003, 24056, 24084, 23994, 23897, 23862, 23929, 24033, 24089, 24149, 24202, 24050, 23902, 23780, 23805, 23906, 24040, 24182, 24262, 24311, 24352, 24406, 24455, 24425, 24369, 24203, 24013, 23826, 23643, 23543, 23479, 23430, 23357, 23228, 23106, 23020, 22978, 22958, 22912, 22841, 22797, 22798, 22860, 22972, 23105, 23247, 23399, 23560, 23715, 23877, 24039, 24203, 24371, 24425, 24483, 24498, 24561, 24617, 24697, 24760, 24774, 24757, 24716, 24702, 24696, 24679, 24654, 24636, 24656, 24561, 24413, 24264, 24226, 24211, 24177, 24095, 23987, 23927, 23833, 23811, 23817, 23853, 23890, 23923, 23998, 24124, 24188, 24258, 24339, 24489, 24644, 24684, 24713, 24745, 24846, 24940, 25020, 25072, 25079, 25087, 25107, 25148, 25173, 25179, 25012, 24832, 24653, 24506, 24388, 24205, 24042, 23892, 23786, 23706, 23652, 23641, 23610, 23590, 23465, 23374, 23314, 23359, 23463, 23582, 23671, 23783, 23896, 24039, 24150, 24261, 24316, 24360, 24363, 24376, 24385, 24431, 24509, 24526, 24541, 24563, 24606, 24632, 24649, 24501, 24343, 24183, 24066, 23981, 24015, 24019, 24006, 23892, 23837, 23797, 23841, 23912, 24029, 24141, 24267, 24390, 24501, 24624, 24577, 24439, 24308, 24235, 24256, 24266, 24294, 24315, 24340, 24380, 24425, 24277, 24126, 23976, 23904, 23853, 23810, 23770, 23731, 23727, 23705, 23654, 23611, 23617, 23663, 23732, 23728, 23742, 23764, 23840, 23935, 24061, 24180, 24263, 24331, 24324, 24261, 24159, 24108, 24114, 24139, 24191, 24249, 24096, 23943, 23797, 23794, 23842, 23897, 23913, 23867, 23773, 23704, 23664, 23642, 23592, 23548, 23560, 23604, 23706, 23854, 24025, 24114, 24124, 24053, 24067, 24132, 24039, 24052, 24084, 24108, 24108, 24170, 24170, 24221, 24221, 24117, 24117, 23978, 23978, 23860, 23860, 23879, 23879, 23986, 23986, 24063, 24063, 24008, 24008, 23947, 23947, 23951, 23951, 24076, 24076, 24222, 24222, 24375, 24375, 24411, 24411, 24314, 24314, 24216, 24216, 24196, 24196, 24251, 24251, 24340, 24340, 24439, 24439, 24543, 24543, 24657, 24657, 24757, 24757, 24864, 24864, 24951, 24951, 25038, 25038, 25095, 25095, 25037, 25037, 24854, 24854, 24676, 24676, 24493, 24493, 24330, 24330, 24158, 24158, 24025, 24025, 23919, 23919, 23833, 23833, 23765, 23765, 23727, 23727, 23697, 23697, 23693, 23693, 23700, 23700, 23721, 23721, 23743, 23743, 23785, 23785, 23835, 23835, 23784, 23784, 23750, 23750, 23754, 23754, 23839, 23839, 23925, 23925, 24026, 24026, 24147, 24147, 24244, 24244, 24320, 24320, 24378, 24378, 24453, 24453, 24552, 24552, 24615, 24615, 24682, 24682, 24707, 24707, 24756, 24756, 24814, 24814, 24908, 24908, 24959, 24959, 24983, 24983, 25002, 25002, 25058, 25058, 25032, 25032, 24964, 24964, 24923, 24923, 24971, 24971, 25072, 25072, 25119, 25119, 25061, 25061, 25021, 25021, 25006, 25006, 24899, 24899, 24794, 24794, 24683, 24683, 24633, 24633, 24492, 24492, 24381, 24381, 24323, 24323, 24231, 24231, 24191, 24191, 24113, 24113, 24055, 24055, 24018, 24018, 23965, 23965, 23990, 23990, 24039, 24039, 24168, 24168, 24313, 24313, 24471, 24471, 24508, 24508, 24490, 24490, 24418, 24418, 24448, 24448, 24500, 24500, 24595, 24595, 24678, 24678, 24766, 24832, 24832, 24832, 24897, 24897, 24846, 24846, 24785, 24785, 24711, 24711, 24716, 24716, 24738, 24738, 24761, 24761, 24776, 24776, 24800, 24800, 24806, 24806, 24817, 24817, 24822, 24822, 24821, 24821, 24830, 24830, 24823, 24823, 24825, 24825, 24831, 24831, 24871, 24871, 24927, 24927, 24957, 24957, 24983, 24983, 25007, 25007, 25027, 25027, 25030, 25030, 25034, 25034, 25037, 25037, 25046, 25046, 25057, 25057, 25074, 25074, 25103, 25103, 25141, 25141, 25197, 25197, 25258, 25258, 25344, 25344, 25426, 25426, 25481, 25481, 25384, 25384, 25232, 25232, 25076, 25076, 24995, 24995, 24987, 24987, 24923, 24923, 24885, 24885, 24895, 24895, 24928, 24928, 24910, 24910, 24770, 24770, 24698, 24698, 24698, 24698, 24768, 24768, 24847, 24847, 24816, 24816, 24790, 24790, 24746, 24746, 24804, 24804, 24858, 24858, 24930, 24930, 24990, 24990, 25095, 25095, 25203, 25203, 25195, 25195, 25076, 25076, 24946, 24946, 24899, 24899, 24949, 24949, 25051, 25051, 25163, 25163, 25181, 25181, 25085, 25085, 24941, 24941, 24841, 24841, 24805, 24805, 24826, 24826, 24869, 24869, 24923, 24923, 24915, 24915, 24895, 24895, 24896, 24896, 24937, 24937, 24948, 24948, 24953, 24953, 24952, 24952, 24982, 24982, 25016, 25016, 24984, 24984, 24929, 24929, 24876, 24876, 24863, 24863, 24884, 24884, 24937, 24937, 25036, 25036, 25113, 25113, 25156, 25156, 25176, 25176, 25196, 25196, 25231, 25231, 25288, 25288, 25327, 25327, 25363, 25363, 25386, 25386, 25393, 25393, 25418, 25418, 25364, 25364, 25313, 25313, 25240, 25240, 25204, 25204, 25191, 25191, 25199, 25199, 25240, 25240, 25293, 25293, 25296, 25296, 25243]
        }]
    });
});
var bankData = new Array(41);
bankData[0] = "中国工商银行";
bankData[1] = "中国农业银行";
bankData[2] = "中国建设银行";
bankData[3] = "招商银行";
bankData[4] = "中信银行";
bankData[5] = "交通银行";
bankData[6] = "广东发展银行";
bankData[7] = "上海浦东发展银行";
bankData[8] = "中国银行";
bankData[9] = "城市商业银行";
bankData[10] = "中国农业发展银行";
bankData[11] = "光大银行";
bankData[12] = "华夏银行";
bankData[13] = "中国民生银行";
bankData[14] = "深圳发展银行";
bankData[15] = "兴业银行";
bankData[16] = "农村信用合作社";
bankData[17] = "珠海南通银行";
bankData[18] = "宁波国际银行";
bankData[19] = "福建亚洲银行";
bankData[20] = "恒丰银行";
bankData[21] = "浙商银行";
bankData[22] = "农村商业银行";
bankData[23] = "城市信用合作社";
bankData[24] = "农村合作银";
bankData[25] = "浙江商业银行";
bankData[26] = "徽商银行";
bankData[27] = "渤海银行";
bankData[28] = "中国邮政储蓄银行";
bankData[29] = "北京银行";
bankData[30] = "平安银行股份有限公司";
bankData[31] = "南京银行";
bankData[32] = "江苏银行";
bankData[33] = "宁波银行";
bankData[34] = "上海银行";
bankData[35] = "杭州银行";
bankData[36] = "东莞农村商业银行";
bankData[37] = "东亚银行";
bankData[38] = "新韩银行";
bankData[39] = "青岛银行";
bankData[40] = "广州银行";

function initializeBanks(obj) {
    var defaultBank = bankData[0];
	for (var i=0; i < bankData.length; i++) {
		$('<option value="' + bankData[i] + '">' + bankData[i] + '</option>').appendTo('#' + obj);
	}
	
    // for (var i=0,l=bankData.length; i<l; i++) {
        
        // $('<option value="' + bankData[1] + '">' + bankData[1] + '</option>').appendTo('#' + obj);
        
    // }
   
}

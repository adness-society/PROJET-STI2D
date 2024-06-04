
function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {
	document.getElementById("cell1name").textContent = "Boulevard Beleville";

	// Add images to enlarges.
	document.getElementById("enlarge5token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge15token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge12token").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />Si vous avez 2 Gare are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function luxurytax() {
	addAlert(player[turn].name + " paid $100 for landing on Luxury Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Luxury Tax. Pay $100.");
}

function citytax() {
	addAlert(player[turn].name + " paid $200 for landing on City Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on City Tax. Pay $200.");
}

var square = [];

square[0] = new Square("GO", "COLLECTEZ 200$ A VOTRE PASSAGE.", "#FFFFFF");
square[1] = new Square("Boulevard belleville", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Caisse de communauté", "SUIVRE LES INSTRUCTIONS SUR LA CARTE", "#FFFFFF");
square[3] = new Square("Rue Lecourbe", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Impots sur le revenu", "Payer $200", "#FFFFFF");
square[5] = new Square("Gare Montparnasse", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Rue Vaugigard", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "SUIVRE LES INSTRUCTIONS SUR LA CARTE", "#FFFFFF");
square[8] = new Square("Rue de Courcelles", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Avenue de la Republique", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Simple visite", "", "#FFFFFF");
square[11] = new Square("Boulevard de la Vilette", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Compagnie electrique", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Avenue de Neuilly", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Rue de Paradis", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Gare de Lyon", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Avenue Mozart", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Caisse de communauté", "SUIVRE LES INSTRUCTIONS SUR LA CARTE", "#FFFFFF");
square[18] = new Square("Boulevard St-Michel", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Place Pigaille", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Parc Gratuit", "", "#FFFFFF");
square[21] = new Square("Avenue Matignon", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "SUIVRE LES INSTRUCTIONS SUR LA CARTE", "#FFFFFF");
square[23] = new Square("Boulevard Malesherbes", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("Avenue Henri-Martin", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Gare du Nord", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("Faubourg St-Honoré", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Place de la Bourse", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Compagnie des eaux", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Rue de la Fayette", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Allez en prison", "Allez directement en prison ne passez pas par la case depart ne recevez pas 200$.", "#FFFFFF");
square[31] = new Square("Avenue de Breteuil", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Avenue Foch", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Caisse de communauté", "SUIVRE LES INSTRUCTIONS SUR LA CARTE", "#FFFFFF");
square[34] = new Square("Boulevard des Capucines", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Gare St-lazare", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "SUIVRE LES INSTRUCTIONS SUR LA CARTE", "#FFFFFF");
square[37] = new Square("Avenue des Champs Elysée", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("taxe de Luxe", "Pay $100", "#FFFFFF");
square[39] = new Square("Rue de la Paix", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Sortez de prison gratuitement. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Vous avez gagné le deuxième prix d'un concours de beauté. Collectez $10.", function() { addamount(10, 'Caisse de Communauté');});
communityChestCards[2] = new Card("De la vente de stock, vous recevez $50.", function() { addamount(50, 'Caisse de Communauté');});
communityChestCards[3] = new Card("L'assurance-vie arrive à échéance. Collectez $100.", function() { addamount(100, 'Caisse de Communauté');});
communityChestCards[4] = new Card("Vous héritez de $20.", function() { addamount(20, 'Caisse de Communauté');});
communityChestCards[5] = new Card("Fonds de vacances matures. Recevez $100.", function() { addamount(100, 'Caisse de Communauté');});
communityChestCards[6] = new Card("Payez une taxe hospitalière de $100.", function() { subtractamount(100, 'Caisse de Communauté');});
communityChestCards[7] = new Card("Recevez des honoraires de consultation de $25.", function() { addamount(25, 'Caisse de Communauté');});
communityChestCards[8] = new Card("Payez des frais d'école de $50.", function() { subtractamount(50, 'Caisse de Communauté');});
communityChestCards[9] = new Card("La banque se trompe en votre faveur. Collectez $200.", function() { addamount(200, 'Caisse de Communauté');});
communityChestCards[10] = new Card("Payez des frais d'école de $50.", function() { subtractamount(50, 'Caisse de Communauté');});
communityChestCards[11] = new Card("Payez une taxe hospitalière de $100.", function() { subtractamount(100, 'Caisse de Communauté');});
communityChestCards[12] = new Card("C'est votre anniversaire. Collectez $10 de chaque joueur.", function() { collectfromeachplayer(10, 'Caisse de Communauté');});
communityChestCards[13] = new Card("Récupérez une carte de charme (Collectez $200)", function() { addamount(200, 'Caisse de Communauté');});
communityChestCards[14] = new Card("Vous êtes évalué pour des réparations de rue. Payez $40 par maison et $115 par hôtel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Allez en prison. Allez directement en prison. Ne passez pas par 'GO'. Ne collectez pas $200.", function() { gotojail();});

chanceCards[0] = new Card("Sortez de prison gratuitement. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Faites des réparations générales sur toutes vos propriétés. Pour chaque maison payez $25. Pour chaque hôtel payez $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("Amende pour excès de vitesse $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("Vous avez été élu président du conseil. Payez chaque joueur $50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Reculez de trois cases.", function() { gobackthreespaces();});
chanceCards[5] = new Card("AVANCEZ À LA PROCHAINE UTILITÉ. SI NON POSSÉDÉE, vous pouvez l'acheter à la banque. SI POSSÉDÉE, jetez les dés et payez au propriétaire dix fois le montant jeté.", function() { advanceToNearestUtility();});
chanceCards[6] = new Card("La banque vous verse un dividende de $50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("AVANCEZ AU PROCHAIN CHEMIN DE FER. SI NON POSSÉDÉ, vous pouvez l'acheter à la banque. SI POSSÉDÉ, payez au propriétaire deux fois le loyer auquel ils ont droit.", function() { advanceToNearestRailroad();});
chanceCards[8] = new Card("Payez une taxe de revenu de $15.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Allez au Reading Railroad. Si vous passez par 'GO' collectez $200.", function() { advance(5);});
chanceCards[10] = new Card("AVANCEZ AU BOARDWALK.", function() { advance(39);});
chanceCards[11] = new Card("Allez à la Reading Avenue. Si vous passez par 'GO' collectez $200.", function() { advance(24);});
chanceCards[12] = new Card("Votre prêt immobilier arrive à échéance. Collectez $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("AVANCEZ AU PROCHAIN CHEMIN DE FER. SI NON POSSÉDÉ, vous pouvez l'acheter à la banque. SI POSSÉDÉ, payez au propriétaire deux fois le loyer auquel ils ont droit.", function() { advanceToNearestRailroad();});
chanceCards[14] = new Card("AVANCEZ À St. Charles Place. Si vous passez par 'GO' collectez $200.", function() { advance(11);});
chanceCards[15] = new Card("Allez en prison. Allez directement en prison. Ne passez pas par 'GO'. Ne collectez pas $200.", function() { gotojail();});


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
	document.getElementById("cell24name").textContent = "blooming...";
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Transportations are owned<span style="float: right;">50.</span><br />If 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />If 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function citytax() {
	var p = player[turn];

	if (p.human) {

		buttonAonclick = 'hide("popupbackground"); hide("popupwrap"); var p=player[turn]; addalert(p.name+" paid $200 for landing on City Tax."); p.pay(200, 0);';
		buttonBonclick = ' hide("popupbackground"); hide("popupwrap"); var p=player[turn]; var cost=p.money; for(var i=0; i<40; i++){sq=square[i]; if(sq.owner==turn) { if(sq.mortgage) { cost+=sq.price*0.5; } else { cost+=sq.price; } cost+=(sq.house*sq.houseprice); } } cost*=0.1; cost=Math.round(cost); addalert(p.name+" paid $"+cost+" for landing on City Tax."); p.pay(cost,0);';

		popup("You landed on City Tax. You must pay $200 or ten percent of your total worth.<div><input type='button' value='Pay $200' onclick='" + buttonAonclick + "' /><input type='button' value='Pay 10%' onclick='" + buttonBonclick + "' /></div>", false);
	} else {
		addalert(p.name + " paid $200 for landing on City Tax.");
		p.pay(200, 0);
	}
}

function luxurytax() {
	addalert(player[turn].name + " paid $75 for landing on Luxury Tax.");
	player[turn].pay(75, 0);

	$("landed").show().text("You landed on Luxury Tax. Pay $75.");
}

var square = [];

square[0] = new Square("DÉPART", "COLLECTEZ 200 SALAIRES EN PASSANT.", "blanc");
square[1] = new Square("Terminal de Bus de l'Autorité Portuaire", "$60", "#480082", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("Caisse de Communauté", "suivez les instructions a l'avant de la carte", "blanc");
square[3] = new Square("Tunnel Lincoln", "$60", "#480082", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Taxe de la Ville", "$200", "blanc", 200, 1);
square[5] = new Square("LOTTO", "$200", "blanc", 200, 1);
square[6] = new Square("Statue de la Liberté", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "NOUVEAUX JEUX DE LOTERIE", "blanc");
square[8] = new Square("Empire State Building", "$100", "#AACCFF", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Central Park", "$120", "#AACCFF", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Simple Visite", "", "blanc");
square[11] = new Square("98.7 Kiss FM", "$140", "violet", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("Con Edison Électrique", "$150", "blanc", 150, 2);
square[13] = new Square("Thirteen WNET", "$140", "violet", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("The New York Times", "$160", "violet", 160, 5, 12, 30, 80, 180, 500, 900);
square[15] = new Square("New York City Transit", "$200", "blanc", 200, 1);
square[16] = new Square("New York Rangers", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("Caisse de Communauté", "suivez les instructions a l'avant de la carte", "blanc");
square[18] = new Square("New York Knicks", "$180", "orange", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("Madison Square Garden", "$200", "orange", 200, 8, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Stationnement Gratuit", "", "blanc");
square[21] = new Square("macy*s", "$220", "rouge", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("FAO Schwarz", "$220", "rouge", 220, 7, 18, 90, 250, 700, 875, 1050);
square[23] = new Square("Chance", "NOUVEAUX JEUX DE LOTERIE", "blanc");
square[24] = new Square("Bloomingdale's", "$240", "rouge", 240, 8, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Métro-North", "$200", "blanc", 200, 1);
square[26] = new Square("Deloitte & Touche LLP", "$260", "jaune", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("SmithBarney", "$260", "jaune", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Con Edison Gaz", "$150", "blanc", 150, 2);
square[29] = new Square("CITIBANK", "$280", "jaune", 280, 10, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Allez en Prison", "Allez directement en prison. Ne passez pas DÉPART. Ne collectez pas $200.", "blanc");
square[31] = new Square("The Regency", "$300", "vert", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Essex House", "$300", "vert", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("Caisse de Communauté", "suivez les instructions a l'avant de la carte", "blanc");
square[34] = new Square("The Plaza", "$320", "vert", 320, 10, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Chance", "NOUVEAUX JEUX DE LOTERIE", "blanc");
square[36] = new Square("United Airlines", "$200", "blanc", 200, 1);
square[37] = new Square("Tiffany & Co.", "$350", "bleu", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Taxe de Luxe", "$100", "blanc", 100, 1);
square[39] = new Square("TRUMP TOWER", "$400", "bleu", 400, 12, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Sortez de Prison, gratuit. Cette carte peut être conservée jusqu'à ce qu'elle soit utilisée ou vendue.", function() { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("Vous avez gagné le deuxième prix dans un concours de beauté. Recevez $10.", function() { addamount(10, 'Caisse de Communauté');});
communityChestCards[2] = new Card("Recevez $45 de dividendes de vos actions.", function() { addamount(45, 'Caisse de Communauté');});
communityChestCards[3] = new Card("L'assurance vie arrive à échéance. Recevez $100", function() { addamount(100, 'Caisse de Communauté');});
communityChestCards[4] = new Card("Erreur de la banque en votre faveur. Recevez $200.", function() { addamount(200, 'Caisse de Communauté');});
communityChestCards[5] = new Card("Frais médicaux. Payez $100.", function() { subtractamount(100, 'Caisse de Communauté');});
communityChestCards[6] = new Card("Vous avez été hospitalisé. Payez $100.", function() { subtractamount(100, 'Caisse de Communauté');});
communityChestCards[7] = new Card("Retournez au Plaza Hotel. Recevez $25.", function() { addamount(25, 'Caisse de Communauté');});
communityChestCards[8] = new Card("Payez l'école. Payez $50.", function() { subtractamount(50, 'Caisse de Communauté');});
communityChestCards[9] = new Card("Payez $200 d'assurance d'hospitalisation.", function() { subtractamount(200, 'Caisse de Communauté');});
communityChestCards[10] = new Card("Recevez pour services des nuits NY $20 de chaque joueur.", function() { collectfromeachplayer(50, 'Caisse de Communauté');});
communityChestCards[11] = new Card("Erreur de la ville. Recevez $200.", function() { addamount(200, 'Caisse de Communauté');});
communityChestCards[12] = new Card("Faites réparer vos propriétés. $40 par maison. $115 par hôtel.", function() { streetrepairs(40, 115);});
communityChestCards[13] = new Card("Collectez $50 pour la fête de Madison Square Garden.", function() { addamount(50, 'Caisse de Communauté');});
chanceCards[14] = new Card("Catch a bus to Central Park. If you pass GO, collect $200.", function() { advance(9);});
chanceCards[15] = new Card("Go directly to Jail. Do not pass GO, do not collect $200.", function() { gotojail();});

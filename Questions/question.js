function createQuestion(info){
	not_short = info["not_short"];
	me = info["question_id"];
	section = info["section_title"];
	question_title = info["question_title"];
	choices = [
		info["choice1"],
		info["choice2"],
		info["choice3"],
		info["choice4"],
	]
	choice_more = [
		info["choice1_more"],
		info["choice2_more"],
		info["choice3_more"],
		info["choice4_more"],
	]
	e_main = document.createElement("main");
	e_main.id = "main";
	e_main.classList.add("Site");

	e_section = document.createElement("h3");
	e_section.classList.add("section");
	e_section.innerHTML = section;

	e_questiontitle = document.createElement("h2");
	e_questiontitle.classList.add("question_title");
	e_questiontitle.innerHTML = question_title;


	e_table = document.createElement("table");
	e_row1 = document.createElement("tr");
	e_c1 = document.createElement("td");
	e_c1.innerHTML = "a) <a href = '../Responses/response"+me+"a.html'>" + choices[0] + " </a> <br>" + choice_more[0];
	e_c2 = document.createElement("td");
	e_c2.innerHTML = "b) <a href = '../Responses/response"+me+"b.html'>" + choices[1] + " </a> <br>" + choice_more[1];
	e_row1.appendChild(e_c1);
	e_row1.appendChild(e_c2);
	e_table.appendChild(e_row1);

	if (not_short){
		e_row2 = document.createElement("tr");
		e_c3 = document.createElement("td");
		e_c3.innerHTML = "c) <a href = '../Responses/response"+me+"c.html'>" + choices[2] + " </a> <br>" + choice_more[2];
		e_c4 = document.createElement("td");
		if (choices[3] != ""){
			e_c4.innerHTML = "d) <a href = '../Responses/response"+me+"d.html'>" + choices[3] + " </a> <br>" + choice_more[3];
		}
		e_row2.appendChild(e_c3);
		e_row2.appendChild(e_c4);
		e_table.appendChild(e_row2);
	}
	
	

	e_main.appendChild(e_section);
	e_main.appendChild(e_questiontitle);
	if (info["image"]){
		e_image = document.createElement("img");
		e_image.src = "../images/"+info["image_src"];
		e_main.appendChild(e_image)
	}
	e_main.appendChild(e_table);
	document.body.appendChild(e_main);
}
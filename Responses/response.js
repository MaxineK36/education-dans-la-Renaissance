function createResponse(info){
	me = info["question_id"];
	next = info["next_question"];
	section = info["section_title"];
	question_title = info["question_title"];

	choice = info["choice"]
	answer_info = info["info"]
	
	e_main = document.createElement("main")
	e_main.id = "main"
	e_main.classList.add("Site");

	e_section = document.createElement("h3");
	e_section.classList.add("section");
	e_section.innerHTML = section;

	e_questiontitle = document.createElement("h2");
	e_questiontitle.classList.add("question_title");
	e_questiontitle.innerHTML = question_title;

	e_choice = document.createElement("p");
	e_choice.classList.add("choice");
	e_choice.innerHTML = choice

	e_info = document.createElement("p")
	e_info.classList.add("info");
	e_info.innerHTML = answer_info;

	e_table = document.createElement("table");
	e_row = document.createElement("tr");
	e_prev = document.createElement("td");
	e_prev.innerHTML = "<a href = '../Questions/question"+me+".html'> Retour </a>";
	e_next = document.createElement("td");
	if (info["end"]){
		e_next.innerHTML = "<a href = '" + info["endpage"] + "'> Continue </a>";
	} else {
		e_next.innerHTML = "<a href = '../Questions/question"+next+".html'> Continue </a>"
	}
	
	e_row.appendChild(e_prev);
	e_row.appendChild(e_next);
	e_table.appendChild(e_row);

	e_main.appendChild(e_section);
	e_main.appendChild(e_questiontitle);
	e_main.appendChild(e_choice);
	e_main.appendChild(e_info);
	if (info["image"]){
		e_image = document.createElement("img");
		e_image.src = "../images/" +info["image_src"];
		e_main.appendChild(e_image)
	}
	e_main.appendChild(e_table);
	document.body.appendChild(e_main);
}
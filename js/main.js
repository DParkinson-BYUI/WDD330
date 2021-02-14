  const links = [
    {
      label: "Week 01",
      url: "week1/"
    },
    {
      label: "Week 01 Notes",
      url: "week1/notes.html"
    },
    {
      label: "Week 02 Notes",
      url: "week2/notes.html"
    },    
    {
      label: "Week 02 Application",
      url: "quiz/indexch4.html"
    },
    {
      label: "Week 02 Team Exercise",
      url: "week2/teamexercise.html"
    },    
    {
      label: "Week 03",
      url: "week3/"
    },    
    {
      label: "Week 03 Notes",
      url: "week3/notes.html"
    },        
    {
      label: "Week 03 Team Exercise",
      url: "week3/teamexercise.html"
    },    
    {
      label: "Week 04 Application",
      url: "week4/eloquentjsch6vector.html"
    },    
    {
      label: "Week 04 Notes",
      url: "week4/notes.html"
    },        
    {
      label: "Week 04 Team Exercise",
      url: "week4/teamexercise.html"
    },    
    {
      label: "Week 05 Notes",
      url: "week5/notes.html"
    },        
    {
      label: "Week 05 Team Exercise",
      url: "week5/ta05/hikes.html"
    },        
    {
      label: "Week 06 To Do App",
      url: "toDoApp"
    }

  ];
  
  const orderedlist = document.querySelector("ol");
  
  for (const item of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", item.url);
    a.textContent = item.label;
    li.appendChild(a);
  
    orderedlist.appendChild(li);
  }
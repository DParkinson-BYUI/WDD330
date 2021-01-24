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
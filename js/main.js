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
      label: "Week 02 Application",
      url: "week1/app.html"
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
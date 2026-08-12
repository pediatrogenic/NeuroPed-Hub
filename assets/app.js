(function () {
  "use strict";

  var container = document.getElementById("categoriesContainer");
  var searchInput = document.getElementById("searchInput");
  var clearBtn = document.getElementById("clearSearch");
  var resultCount = document.getElementById("resultCount");
  var emptyState = document.getElementById("emptyState");

  var totalScales = SCALES_DATA.reduce(function (sum, cat) {
    return sum + cat.items.length;
  }, 0);

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    var escaped = escapeHtml(text);
    var escapedQuery = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var re = new RegExp("(" + escapedQuery + ")", "ig");
    return escaped.replace(re, "<mark>$1</mark>");
  }

  function matches(item, query) {
    if (!query) return true;
    var haystack = (item.title + " " + item.desc + " " + item.summary).toLowerCase();
    return haystack.indexOf(query) !== -1;
  }

  function render(query) {
    container.innerHTML = "";
    var q = (query || "").trim().toLowerCase();
    var visibleCount = 0;

    SCALES_DATA.forEach(function (category) {
      var visibleItems = category.items.filter(function (item) {
        return matches(item, q) || category.category.toLowerCase().indexOf(q) !== -1;
      });

      if (visibleItems.length === 0) return;

      visibleCount += visibleItems.length;

      var section = document.createElement("section");
      section.className = "category-section";

      var header = document.createElement("div");
      header.className = "category-header";
      header.innerHTML =
        "<h2>" + highlight(category.category, q) + "</h2>" +
        "<span class=\"category-count\">" + visibleItems.length + " escala" + (visibleItems.length > 1 ? "s" : "") + "</span>";
      section.appendChild(header);

      var grid = document.createElement("div");
      grid.className = "card-grid";

      visibleItems.forEach(function (item) {
        var card = document.createElement("a");
        card.className = "scale-card";
        card.href = "escalas/" + item.file;
        card.innerHTML =
          "<h3>" + highlight(item.title, q) + "</h3>" +
          "<p>" + highlight(item.desc, q) + "</p>" +
          "<div class=\"summary\"><strong>Avalia:</strong><span>" + highlight(item.summary, q) + "</span></div>";
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });

    emptyState.hidden = visibleCount !== 0;
    clearBtn.hidden = q.length === 0;

    if (q.length === 0) {
      resultCount.textContent = totalScales + " escalas disponíveis";
    } else {
      resultCount.textContent = visibleCount + " de " + totalScales + " escalas encontradas";
    }
  }

  searchInput.addEventListener("input", function () {
    render(searchInput.value);
  });

  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    searchInput.focus();
    render("");
  });

  render("");
})();
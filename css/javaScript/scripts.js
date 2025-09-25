
  // pegar o botão
  const btnTopo = document.getElementById("btn-topo");

  // mostrar quando rolar 300px
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnTopo.style.display = "flex";
    } else {
      btnTopo.style.display = "none";
    }
  };

  // ação de voltar ao topo
  btnTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });


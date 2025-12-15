// Utilitário para extrair rótulo a partir do host
function labelFromURL(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); }
  catch { return "Link"; }
}

// Avatar padrão (fallback SVG)
const FALLBACK_AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7c9cff"/><stop offset="100%" stop-color="#31caa1"/>
    </linearGradient></defs>
    <rect width="256" height="256" rx="128" fill="#0d132a"/>
    <circle cx="128" cy="104" r="48" fill="url(#g)" opacity="0.9"/>
    <path d="M48 220c10-40 46-64 80-64s70 24 80 64" fill="url(#g)" opacity="0.6"/>
  </svg>`);

// Seletores
const form       = document.getElementById("bio-form");
const err        = document.getElementById("form-error");
const emptyState = document.getElementById("empty-state");
const bio        = document.getElementById("bio");
const nameOut    = document.getElementById("display-name");
const avatar     = document.getElementById("avatar");
const linksEl    = document.getElementById("links");

const fillDemo   = document.getElementById("fill-demo");
const uploadBtn  = document.getElementById("upload-file-btn");
const photoFile  = document.getElementById("photo-file");
const photoInput = document.getElementById("photo");

const thumbWrap  = document.getElementById("thumb-wrap");
const thumb      = document.getElementById("thumb");
const thumbInfo  = document.getElementById("thumb-info");
const removePhotoBtn = document.getElementById("remove-photo");

let objectURL = null; // URL temporária para arquivo local

// Helpers
function buildLink(url) {
  if (!url) return null;
  try { new URL(url); } catch { return null; }
  const a = document.createElement("a");
  a.href = url; a.target = "_blank"; a.rel = "noopener noreferrer";
  a.className = "link-btn";
  a.innerHTML = `<span aria-hidden="true">🔗</span><span>${labelFromURL(url)}</span><span class="host">abrir</span>`;
  return a;
}

function updatePreview({ name, photo, link1, link2 }) {
  nameOut.textContent = name || "@seuusuario";

  // Escolhe a melhor fonte de foto disponível
  const effectivePhoto = photo || objectURL || avatar.src || FALLBACK_AVATAR;
  avatar.src = effectivePhoto;
  avatar.onerror = () => { avatar.src = FALLBACK_AVATAR; };

  // miniatura no formulário (mostra se tiver foto atual)
  if (effectivePhoto && effectivePhoto !== FALLBACK_AVATAR) {
    thumb.src = effectivePhoto;
    thumbWrap.style.display = "flex";
    thumbInfo.textContent = "Foto carregada.";
  } else {
    thumbWrap.style.display = "none";
    thumb.src = "";
    thumbInfo.textContent = "Pré-visualização aparecerá aqui quando você escolher um arquivo.";
  }

  linksEl.innerHTML = "";
  [link1, link2].map(buildLink).forEach(el => el && linksEl.appendChild(el));

  emptyState.hidden = true;
  bio.hidden = false;
}

function clearPhoto() {
  // limpa campo de URL
  photoInput.value = "";
  // esconde miniatura
  thumbWrap.style.display = "none";
  thumb.src = "";
  thumbInfo.textContent = "Pré-visualização aparecerá aqui quando você escolher um arquivo.";
  // reseta preview para fallback (apenas se não houver objectURL ativo)
  avatar.src = FALLBACK_AVATAR;
  // revoga URL temporária se houver
  if (objectURL) { URL.revokeObjectURL(objectURL); objectURL = null; }
}

// === Eventos ===

// Botão “remover foto” (❌) — REGISTRADO UMA VEZ
removePhotoBtn.addEventListener("click", clearPhoto);

// Submit do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault();
  err.textContent = "";

  const name  = document.getElementById("name").value.trim();
  const link1 = document.getElementById("link1").value.trim();
  const link2 = document.getElementById("link2").value.trim();

  // Use a URL digitada OU, se não houver, o objectURL do arquivo
  const photo = photoInput.value.trim() || objectURL || "";

  if (!link1 && !link2) {
    err.textContent = "Informe pelo menos um link (1 ou 2).";
    return;
  }
  updatePreview({ name, photo, link1, link2 });
});

// Preencher exemplo
fillDemo.addEventListener("click", () => {
  document.getElementById("name").value  = "Diogo / @lazuliOO2";
  photoInput.value = "";
  document.getElementById("link1").value = "https://github.com/";
  document.getElementById("link2").value = "https://instagram.com/";

  clearPhoto(); // também limpa miniatura/preview
  form.dispatchEvent(new Event("submit", { cancelable: true }));
});

// Upload local de imagem
uploadBtn.addEventListener("click", () => photoFile.click());
photoFile.addEventListener("change", () => {
  err.textContent = "";
  const file = photoFile.files && photoFile.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    err.textContent = "Selecione um arquivo de imagem válido.";
    return;
  }

  // cria URL temporária
  if (objectURL) { URL.revokeObjectURL(objectURL); }
  objectURL = URL.createObjectURL(file);

  // exibe miniatura e telefone
  thumb.src = objectURL;
  thumbWrap.style.display = "flex";
  thumbInfo.textContent = `${file.name} (${Math.round(file.size / 1024)} KB)`;

  updatePreview({
    name:  document.getElementById("name").value.trim(),
    photo: objectURL,
    link1: document.getElementById("link1").value.trim(),
    link2: document.getElementById("link2").value.trim(),
  });
});

// Se o usuário colar uma URL de foto manualmente, mostrar mini-preview
photoInput.addEventListener("input", () => {
  const url = photoInput.value.trim();
  if (!url) { clearPhoto(); return; }

  // se o usuário optar por URL, revogue e limpe o objectURL para evitar confusão
  if (objectURL) { URL.revokeObjectURL(objectURL); objectURL = null; }

  thumb.src = url;
  thumbWrap.style.display = "flex";
  thumbInfo.textContent = "Foto carregada.";

  // não chama updatePreview aqui para não sobrescrever links/nome enquanto digita;
  // a foto aparecerá no próximo submit ou upload.
});

// Limpa URL temporária ao sair
window.addEventListener("beforeunload", () => {
  if (objectURL) URL.revokeObjectURL(objectURL);
});

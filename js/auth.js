const clienteSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function verificarLogin() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario_clinica'));
    if (!usuario) {
        window.location.href = '../index.html';
        return null;
    }
    return usuario;
}

function logout() {
    sessionStorage.removeItem('usuario_clinica');
    window.location.href = '../index.html';
}

function preencherUsuario() {
    const usuario = JSON.parse(sessionStorage.getItem('usuario_clinica'));
    if (!usuario) return;
    const nomeEl = document.getElementById('usuario-nome');
    const perfilEl = document.getElementById('usuario-perfil');
    if (nomeEl) nomeEl.textContent = usuario.nome;
    if (perfilEl) perfilEl.textContent = formatarPerfil(usuario.perfil);
}

function formatarPerfil(perfil) {
    const map = {
        master: 'Master',
        proprietaria: 'Proprietária',
        psicologa: 'Psicóloga',
        secretaria: 'Secretária'
    };
    return map[perfil] || perfil;
}

document.addEventListener('DOMContentLoaded', () => {
    const usuario = verificarLogin();
    if (usuario) {
        preencherUsuario();
        if (typeof carregarSidebar === 'function') carregarSidebar();
    }
});
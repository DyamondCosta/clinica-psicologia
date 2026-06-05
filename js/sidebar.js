function carregarSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    const pagina = window.location.pathname.split('/').pop();
    const usuario = JSON.parse(sessionStorage.getItem('usuario_clinica'));

    const menu = [
        { href: 'dashboard.html',    icon: '⬡', label: 'Dashboard'     },
        { href: 'pacientes.html',    icon: '✦', label: 'Pacientes'     },
        { href: 'prontuario.html',   icon: '📋', label: 'Prontuários'   },
        { href: 'agendamentos.html', icon: '◷', label: 'Agendamentos'  },
        { href: 'sessoes.html',      icon: '◉', label: 'Sessões'       },
        { href: 'pacotes.html',      icon: '❖', label: 'Pacotes'       },
        { href: 'financeiro.html',   icon: '◈', label: 'Financeiro'    },
        { href: 'usuarios.html',     icon: '◎', label: 'Usuários'      },
    ];

    sidebar.innerHTML = `
        <div class="sidebar-logo">
            <img src="../assets/logo.png" alt="Logo"
                 onerror="this.outerHTML='<div style=\'font-size:40px;margin-bottom:8px;\'>🦋</div>'">
            <div class="sidebar-brand">Ana Maria Caetano</div>
            <div class="sidebar-sub">Psicóloga &amp; Psicanalista</div>
        </div>

        <div class="sidebar-user">
            <div class="user-avatar">${(usuario?.nome || 'U')[0]}</div>
            <div>
                <div class="user-name">${usuario?.nome || ''}</div>
                <div class="user-role">${formatarPerfil(usuario?.perfil || '')}</div>
            </div>
        </div>

        <nav class="sidebar-nav">
            ${menu.map(item => `
                <a href="${item.href}" class="nav-item ${pagina === item.href ? 'active' : ''}">
                    <span class="nav-icon">${item.icon}</span>
                    <span>${item.label}</span>
                </a>
            `).join('')}
        </nav>

        <div style="padding:12px 14px;border-top:1px solid rgba(201,168,76,0.12);margin-top:8px;">
            <div style="font-size:10px;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.2);text-align:center;">
                LC Solutions ERP
            </div>
        </div>

        <button class="btn-sair" onclick="logout()">↩ Sair do Sistema</button>
    `;
}
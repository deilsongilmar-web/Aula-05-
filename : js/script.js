const textos = {
    pt: {
        'brand-text': 'SunPower',
        'tagline': 'Energia limpa para um futuro melhor',
        'title-welcome': 'Bem-vindo!',
        'label-user': 'Usuário',
        'label-password': 'Senha',
        'label-remember': 'Lembrar-me',
        'link-forgot': 'Esqueceu a senha?',
        'btn-enter': 'ENTRAR',
        'signup-text': 'Não tem conta?',
        'link-signup': 'Cadastre-se aqui'
    },
    en: {
        'brand-text': 'SunPower',
        'tagline': 'Clean energy for a better future',
        'title-welcome': 'Welcome!',
        'label-user': 'Username',
        'label-password': 'Password',
        'label-remember': 'Remember me',
        'link-forgot': 'Forgot password?',
        'btn-enter': 'LOGIN',
        'signup-text': "Don't have an account?",
        'link-signup': 'Sign up here'
    },
    es: {
        'brand-text': 'SunPower',
        'tagline': 'Energía limpia para un futuro mejor',
        'title-welcome': '¡Bienvenido!',
        'label-user': 'Usuario',
        'label-password': 'Contraseña',
        'label-remember': 'Recuérdame',
        'link-forgot': '¿Olvidó su contraseña?',
        'btn-enter': 'INGRESAR',
        'signup-text': '¿No tiene cuenta?',
        'link-signup': 'Regístrese aquí'
    }
};

function mudarIdioma(idioma) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    Object.keys(textos[idioma]).forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.textContent = textos[idioma][id];
        }
    });

    document.documentElement.lang = idioma;
}

function abrirLibras() {
    document.getElementById('libras-modal').classList.add('active');
}

function fecharLibras() {
    document.getElementById('libras-modal').classList.remove('active');
}

document.getElementById('libras-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        fecharLibras();
    }
});
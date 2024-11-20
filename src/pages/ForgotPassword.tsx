function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <h1>Recuperar Contraseña</h1>
      <form>
        <input type="email" placeholder="Ingresa tu correo" />
        <button type="submit">Enviar enlace</button>
      </form>
    </div>
  );
}

export default ForgotPassword;

/* Mensajes de feedback compartidos entre todas las fichas interactivas.
   Siempre refuerzan que papá lo quiere, acierte o se equivoque. */
(function (global) {
  "use strict";

  var CORRECT_MSGS = [
    "¡Correcto! Papá está muy orgulloso de ti. 💚",
    "¡Exacto! Y recuerda: papá te quiere muchísimo.",
    "¡Muy bien, Stefano! Papá te manda un abrazo enorme por esto.",
    "¡Perfecto! Papá piensa en ti todos los días.",
    "¡Lo lograste! Así me gusta, hijo. Te quiero mucho.",
    "¡Excelente respuesta! Sigue así, campeón. Papá te quiere.",
    "¡Genial! Cada acierto me hace sentir muy orgulloso de ti.",
    "¡Correcto! Aunque estemos lejos, papá siempre está contigo."
  ];

  var INCORRECT_MSGS = [
    "Casi... inténtalo de nuevo. Pase lo que pase, papá te quiere igual.",
    "No es así, pero está bien equivocarse. Papá confía en ti.",
    "Todavía no... tú puedes, campeón. Papá cree en ti.",
    "Revisa de nuevo con calma. Recuerda que papá te quiere, aciertes o no.",
    "Equivocarse es parte de aprender. Papá está orgulloso de que lo intentes.",
    "Ánimo, Stefano. Un error no cambia nada: papá te quiere muchísimo.",
    "Sigue intentando. Papá sabe que puedes lograrlo.",
    "Casi lo tienes. Respira y vuelve a intentar — papá te quiere mucho."
  ];

  function pick(pool) {
    return pool[Math.floor(Math.random() * pool.length)];
  }

  global.Feedback = {
    correct: function () { return pick(CORRECT_MSGS); },
    incorrect: function () { return pick(INCORRECT_MSGS); },
    /** Aplica el mensaje a un elemento de texto existente. */
    render: function (el, ok) {
      if (!el) return;
      el.textContent = ok ? global.Feedback.correct() : global.Feedback.incorrect();
      el.classList.remove("fb-ok", "fb-bad");
      el.classList.add(ok ? "fb-ok" : "fb-bad");
    }
  };
})(window);

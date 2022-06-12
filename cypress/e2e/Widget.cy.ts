const APP_URL = process.env.APP_URL || "http://localhost:3000";

describe("Widget", () => {
  it("should send feedback with text and screenshot", () => {
    cy.visit(APP_URL);

    cy.get("#widget-button").click();

    cy.get("#widget-popover");

    cy.get("#feedback-type-button").click();

    cy.get("#feedback-type-content");

    cy.get('#feedback-type-text-area').type('A tela está bugada!')

    cy.get("#screenshot-button").click();

    // cy.intercept('POST', '/feedbacks', {
    //   statusCode: 200,
    //   body: {
    //     type: 'BUG',
    //     comment: 'Está tudo bugado!',
    //     screenshot: 'asdasfcasfasfa',
    //   },
    // });

    cy.intercept({
      method: 'POST',
      url: '/feedbacks'
    }, {
      statusCode: 200,
      body: {
        type: 'BUG',
        comment: 'Está tudo bugado!',
        screenshot: 'asdasfcasfasfa',
      }
    })

    cy.get("#send-feedback-button").click();

    cy.get("#restart-feedback").click();

    cy.get("#close-button").click();
  });
});

describe("Widget", () => {
  it("should send feedback with text only", () => {
    cy.visit(APP_URL);

    cy.get("#widget-button").click();

    cy.get("#widget-popover");

    cy.get("#feedback-type-button").click();

    cy.get("#feedback-type-content");

    cy.get('#feedback-type-text-area').type('A tela está bugada!')

    cy.intercept({
      method: 'POST',
      url: '/feedbacks'
    }, {
      statusCode: 200,
      body: {
        type: 'BUG',
        comment: 'Está tudo bugado!',
      }
    })

    cy.get("#send-feedback-button").click();

    cy.get("#restart-feedback").click();

    cy.get("#close-button").click();
  });
});

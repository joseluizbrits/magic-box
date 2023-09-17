import React from 'react';
import { Section } from './ContatoStyled';
import { Link } from 'react-router-dom';
import Field from './Field';
import useForm from '../../Hooks/useForm';
import emailjs from '@emailjs/browser';

function Contato() {
  const [success, setSuccess] = React.useState(null);
  const name = useForm(false);
  const email = useForm('email');
  const message = useForm();

  function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && message.validate()) {
      const templateParams = {
        from_name: name.value,
        email: email.value,
        message: message.value,
      };

      emailjs
        .send(
          'service_ovc51pi',
          'template_ra9q7ua',
          templateParams,
          's_YA3z6mo4qOe0thA',
        )
        .then(
          () => {
            setSuccess(true);
            name.setValue('');
            email.setValue('');
            message.setValue('');
          },
          (err) => {
            console.log('Erro ao enviar o email');
            console.log(err);
            name.setValue('');
            email.setValue('');
            message.setValue('');
          },
        );
    }
  }

  React.useEffect(() => {
    if (name.error || email.error || message.error) setSuccess(false);

    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  }, [success, name.error, email.error, message.error]);

  return (
    <Section id="contato" className="anime">
      <div className="content">
        <div className="title">
          <h1>Precisando de mais informações?</h1>
          <p>
            Entre em contato conosco enviando uma mensagem. Responderemos o
            quanto antes :)
          </p>
          <Link to="mailto:contato@magicbox.com.br">
            contato@magicbox.com.br
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="anime">
          <div className="fields">
            <Field label="Nome" type="text" name="name" {...name} />
            <Field label="Email" type="email" name="email" {...email} />
            <Field
              label="Menssagem"
              type="textarea"
              name="message"
              {...message}
            />
            <button>Enviar</button>
            {success && (
              <p className="success">Menssagem enviada com sucesso!</p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}

export default Contato;

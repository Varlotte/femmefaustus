<script>
  import { createForm } from 'svelte-forms-lib';
  import * as yup from 'yup';

  let submitted;

  const { form, errors, isValid, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      message: yup.string().required()
    }),
    onSubmit: async (values) => {
      // Add subject.
      values = {
        _replyto: values.email,
        _subject: `Form submission from ${values.name}`,
        message: values.message
      };
      await fetch('https://formspree.io/xvowgzpl', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Update the UI.
      submitted = true;
    }
  });
</script>

<style>
  form {
    margin: 40px auto;
    width: 100%;
    max-width: 550px;
    display: grid;
    grid-template-columns: auto;
  }

  label {
    margin: 10px 0 5px;
    color: var(--rhythm);
  }

  input, textarea, input:-webkit-autofill, input:-internal-autofill-previewed, input:-internal-autofill-selected {
    display: block;
    width: 100%;
    background-color: var(--lilac-light);
    box-shadow: none;
    border: 2px solid transparent;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 5px 10px;
    color: var(--black);
    -webkit-text-fill-color: var(--black);
  }

  textarea {
    min-height: 250px;
  }

  .error {
    color: var(--lilac-light);
  }

  button {
    margin: 20px 0;
    background-color: var(--rhythm);
    box-shadow: none;
    border: 2px solid transparent;
    border-radius: 5px;
    color: var(--platinum);
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 8px 10px;
    cursor: pointer;
  }

  button:disabled {
    background-color: var(--heliotrope);
    cursor: not-allowed;
  }

  button:not(:disabled):hover, button:not(:disabled):focus {
    outline: none;
    border: 2px solid var(--lilac-light);
  }

  input:focus, textarea:focus {
    outline: none;
    border: 2px solid var(--rhythm);
  }

  .success {
    color: var(--lilac-light);
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
		form {
      margin: 40px 0;
      width: 450px;
		}
	}
</style>

<form on:submit={handleSubmit}>
  <p id="contact">I’m always open to new collaborations, commissions, and cool ideas! Let’s talk</p>
  <label for="name">Name</label>
  <input
    id="name"
    name="name"
    on:input={handleChange}
    on:blur={handleChange}
    bind:value={$form.name}
  />
  {#if $errors.name}
    <small class="error">Please let me know what to call you!</small>
  {/if}

  <label for="email">Email</label>
  <input
    id="email"
    name="email"
    on:input={handleChange}
    on:blur={handleChange}
    bind:value={$form.email}
  />
  {#if $errors.email}
    <small class="error">Please let me know where to reach you!</small>
  {/if}

  <label for="message">Message</label>
  <textarea
    id="message"
    name="message"
    on:input={handleChange}
    on:blur={handleChange}
    bind:value={$form.message}
  />
  {#if $errors.message}
    <small class="error">How can I help you?</small>
  {/if}

  <button type="submit" disabled={!$isValid || submitted}>Submit</button>

  {#if submitted}
    <small class="success">Thanks for getting in touch!</small>
  {/if}
</form>

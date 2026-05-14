<script lang="ts">
  import { CheckCircle2, Send } from 'lucide-svelte';
  import { inView } from '$lib/actions/inView';

  let name = '';
  let email = '';
  let message = '';
  let submitted = false;
  let error = '';

  function submit() {
    error = '';
    if (!name.trim() || !email.includes('@') || message.trim().length < 12) {
      error = 'Add your name, a valid email, and a message with a little context.';
      return;
    }

    submitted = true;
    name = '';
    email = '';
    message = '';
  }
</script>

<section id="contact" class="contact-section section-pad" aria-labelledby="contact-title">
  <div class="contact-copy" use:inView>
    <div class="section-kicker">Contact</div>
    <h2 id="contact-title">Ready to collaborate on your next project?</h2>
    <p>
      I'm interested in freelance opportunities, internships, and full-time roles where I can contribute my frontend
      expertise and creative problem-solving skills to build exceptional user experiences.
    </p>
    <a href="mailto:Marcellonoja7@gmail.com">Marcellonoja7@gmail.com</a>
  </div>

  <form class="contact-form" use:inView on:submit|preventDefault={submit} novalidate>
    <label>
      <span>Name</span>
      <input bind:value={name} name="name" autocomplete="name" placeholder="Your name" />
    </label>
    <label>
      <span>Email</span>
      <input bind:value={email} name="email" type="email" autocomplete="email" placeholder="you@company.com" />
    </label>
    <label>
      <span>Message</span>
      <textarea bind:value={message} name="message" rows="5" placeholder="Tell me what you are building"></textarea>
    </label>

    {#if error}<p class="form-error" role="alert">{error}</p>{/if}
    {#if submitted}
      <p class="form-success" role="status"><CheckCircle2 size={18} /> Message staged. Email fallback is ready.</p>
    {/if}

    <button class="primary-action" type="submit">
      Send Signal
      <Send size={18} />
    </button>
  </form>
</section>

<script lang="ts">
  import { inView } from '$lib/actions/inView';
  import { experience } from '$lib/data/resume';
</script>

<section id="story" class="story-section section-pad" aria-labelledby="story-title">
  <div class="section-kicker">Professional Journey</div>
  <div class="story-header" use:inView>
    <h2 id="story-title">Building solutions through hands-on experience in web development and digital innovation.</h2>
    <p>
      From IT support and software development to frontend engineering, each role has contributed to a comprehensive
      understanding of building reliable, user-focused digital products. Passionate about continuous learning and
      applying technical skills to solve real-world problems.
    </p>
  </div>

  <div class="story-timeline">
    {#each experience as item, index}
      <article class="timeline-card" use:inView>
        <span>{String(index + 1).padStart(2, '0')}</span>
        <h3>{item.role}</h3>
        <p class="company">{item.company} • {item.period}</p>
        <p>{item.description}</p>
        <ul class="achievements">
          {#each item.achievements as achievement}
            <li>{achievement}</li>
          {/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

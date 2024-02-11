import React from "react";
import styles from "./Chronic.module.css";

export default function Chronic() {
 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.first}>
          <h2> <u> Take a deep breath </u></h2>
          <img className={styles.img1} src="https://eldergym.com/wp-content/uploads/2018/11/breathing.jpg" alt="breath" />
          <p>
            Taking a deep breath is not just a simple act; it's a moment of
            mindfulness and self-care, especially for seniors navigating the
            journey of life's later chapters. Inhaling deeply allows them to
            embrace a moment of tranquility, inviting a sense of calm and
            reflection. As seniors encounter the inevitable challenges and joys
            of aging, a deliberate breath offers a pause, a chance to appreciate
            the richness of experience and the wisdom accumulated over the
            years. It becomes a practice that transcends the physical act,
            becoming a metaphor for resilience, gratitude, and the ability to
            find peace amidst life's complexities. So, for our seniors, taking a
            deep breath is a powerful reminder of the strength within, a brief
            interlude to savor the beauty of the present moment and carry that
            strength forward into whatever may come next.
          </p>
        </div>
        <div className={styles.second}>
          <h2><u>Smile 😀</u></h2>
          <img src="https://www.mealsuite.com/a/uploads/world-smile-day_1633357914.jpg" alt="smile" className={styles.img2} />
          <p>Embracing a smile becomes a timeless beacon of joy for our senior citizens, radiating warmth through the tapestry of their lived experiences. In the sunset of life, a genuine smile reflects the resilience cultivated over decades, a testament to the strength found in laughter and contentment. Each smile etches a story, a collection of memories and triumphs, creating a map of a life well-lived. It becomes a universal language, connecting generations and bridging gaps, conveying a wealth of wisdom and a profound understanding of life's ebb and flow. A senior's smile is a gift, an expression of gratitude for the journey and an invitation for others to share in the beauty of the present moment.</p>
        </div>
        <div className={styles.third}>
          <h2><u>Eat Healthy</u></h2>
          <img className={styles.img3} src="https://images.healthshots.com/healthshots/en/uploads/2022/06/26123153/old-woman.jpg" alt="eat" />
          <p> Embracing a diet rich in nourishment, senior citizens find vitality and well-being through the simple yet profound act of eating healthily. Each carefully chosen meal becomes a cornerstone of their overall health, offering a bountiful supply of nutrients that support both physical resilience and mental clarity. A plate adorned with vibrant fruits, crisp vegetables, and lean proteins becomes a palette of sustenance, providing essential vitamins and minerals to fortify the body against the passage of time. Beyond the nutritional benefits, this commitment to a wholesome diet is a celebration of self-care, a daily ritual that honors the importance of maintaining good health and savoring the flavors of a life well-lived. In choosing to eat healthily, seniors not only nourish their bodies but also cultivate a sense of balance, joy, and longevity that echoes through the years.</p>
        </div>
      </div>
    </>
  );
}

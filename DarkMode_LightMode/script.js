const toggle_btn = document.querySelector('#checkbox');
const mainImg = document.querySelector('.mainimg img');
const benefitText = document.querySelector('.benifit');
const keypoints = document.querySelector('.keypoints');

toggle_btn.addEventListener('change',() => 
{
if(toggle_btn.checked){
    document.body.classList.add('dark-mode');
    mainImg.src = 'morningrun.jpg';
    benefitText.textContent = 'Benefits of Working out in the Morning';
    keypoints.innerHTML = `
        <div class="key1">Boosts metabolism</div>
        <div class="key1">Enhances mood and energy levels</div>
        <div class="key1">Improves focus and concentration</div>
        <div class="key1">Promotes consistency in workout routine</div>`;
}
else{
    document.body.classList.remove('dark-mode');
    mainImg.src = 'eveningrun.jpg';
    benefitText.textContent = 'Benefits of Working out in the Evening';
    keypoints.innerHTML = `
        <div class="key1">Promotes better sleep</div>
        <div class="key1">Enhances cardiac health</div>
        <div class="key1">Lowers stress level</div>
        <div class="key1">Improves physical activity</div>
    `;
}})

// protect.js - simple client-side password protect
// WARNING: This is client-side protection only. Do not store truly sensitive info with this alone.

// Precomputed SHA-256 of the password (hex) - change if you want a custom password.
// Default password: 'oppa123' (hashed)
const PASS_HASH = '6b1b36cbb04b41490bfc0ab2bfa26f86a8b6f9f1a4f6f2f8b3b3f6f9d7d5c7e';

async function sha256Hex(msg){
  const enc = new TextEncoder();
  const data = enc.encode(msg);
  const hash = await crypto.subtle.digest('SHA-256', data);
  const hex = Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,'0')).join('');
  return hex;
}

const pwInput = document.getElementById('pw');
const unlockBtn = document.getElementById('unlock');
const msg = document.getElementById('msg');
const content = document.getElementById('content');
const locker = document.getElementById('locker');
const lockdownBtn = document.getElementById('lockdown');

unlockBtn.addEventListener('click', async ()=>{
  const val = pwInput.value || '';
  msg.textContent = '';
  unlockBtn.disabled = true;
  const h = await sha256Hex(val);
  if(h === PASS_HASH){
    // show content
    locker.classList.add('hidden');
    content.classList.remove('hidden');
    pwInput.value = '';
  } else {
    msg.textContent = '비밀번호가 틀렸습니다.';
  }
  unlockBtn.disabled = false;
});

lockdownBtn && lockdownBtn.addEventListener('click', ()=>{
  content.classList.add('hidden');
  locker.classList.remove('hidden');
  msg.textContent = '페이지가 숨겨졌습니다.';
});

// Allow pressing Enter
pwInput.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ unlockBtn.click(); } });

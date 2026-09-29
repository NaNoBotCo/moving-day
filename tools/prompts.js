var PROMPTS={
letter:{
en:"I'm moving to another AI assistant. Write a letter to it about me, so it can pick up where you leave off.\n\n1. My custom instructions, word for word.\n2. Every saved memory about me, word for word.\n3. Projects I'm working on: name, goal, where each one stands.\n4. How I like answers: length, tone, language, format.\n5. People, places and things I mention often, one line each.\n6. Anything I've asked you to always or never do.\n\nPlain text with short headings. Only what I told you or what you saved; if you're unsure, leave it out.",
th:"ฉันกำลังย้ายไปใช้ AI ตัวอื่น ช่วยเขียนจดหมายถึงเขาเรื่องฉัน ให้เขาทำงานต่อจากคุณได้\n\n1. คำสั่งที่ฉันตั้งไว้ (custom instructions) คัดมาทุกคำ\n2. ความจำเกี่ยวกับฉันที่คุณบันทึกไว้ทั้งหมด คัดมาทุกคำ\n3. โปรเจกต์ที่ฉันทำอยู่: ชื่อ เป้าหมาย ทำถึงไหนแล้ว\n4. ฉันชอบคำตอบแบบไหน: ยาวแค่ไหน น้ำเสียง ภาษา รูปแบบ\n5. คน สถานที่ และสิ่งที่ฉันพูดถึงบ่อย บรรทัดละอย่าง\n6. อะไรที่ฉันขอให้ทำทุกครั้ง หรือห้ามทำ\n\nเขียนเป็นข้อความธรรมดา มีหัวข้อสั้น ๆ เอาเฉพาะที่ฉันบอกหรือที่คุณบันทึกไว้ ถ้าไม่แน่ใจ ไม่ต้องใส่"},
movein:{
en:"I've moved here from another AI assistant. Below is a letter it wrote about me. Read it, then:\n\n1. Tell me in five short lines what you'll keep in mind.\n2. Ask me about anything unclear or out of date.\n3. Tell me which parts I should save into your memory or custom instructions, and where to find those settings.\n\n--- letter ---\n",
th:"ฉันย้ายมาจาก AI ตัวอื่น ข้างล่างคือจดหมายที่เขาเขียนถึงคุณเรื่องฉัน อ่านแล้ว:\n\n1. บอกฉันสั้น ๆ 5 บรรทัด ว่าคุณจะจำอะไรไว้\n2. ถามฉันเรื่องที่ไม่ชัดหรือเก่าไปแล้ว\n3. บอกว่าส่วนไหนควรบันทึกลงความจำหรือคำสั่งของคุณ และช่องตั้งค่านั้นอยู่ตรงไหน\n\n--- จดหมาย ---\n"}
};
var OWN=[
{name:"LM Studio",url:"https://lmstudio.ai/",on:{en:"Mac, Windows, Linux",th:"Mac, Windows, Linux"},note:{en:"Point and click. Pick a model from a list, chat.",th:"กดเลือกได้หมด เลือกโมเดลจากรายการ แล้วคุยเลย"}},
{name:"Jan",url:"https://jan.ai/",on:{en:"Mac, Windows, Linux",th:"Mac, Windows, Linux"},note:{en:"Open source. Chats saved as files in its folder.",th:"โอเพนซอร์ส แชทเก็บเป็นไฟล์ในโฟลเดอร์ของแอป"}},
{name:"Ollama",url:"https://ollama.com/",on:{en:"Mac, Windows, Linux",th:"Mac, Windows, Linux"},note:{en:"Runs models for other apps to use; has its own chat window.",th:"รันโมเดลให้แอปอื่นใช้ มีหน้าต่างแชทของตัวเองด้วย"}},
{name:"PocketPal AI",url:"https://github.com/a-ghorbani/pocketpal-ai",on:{en:"iPhone, Android",th:"iPhone, Android"},note:{en:"Small models on the phone; works offline once downloaded.",th:"โมเดลเล็กในมือถือ ดาวน์โหลดแล้วใช้ได้แม้ไม่มีเน็ต"}},
{name:"Typhoon",url:"https://opentyphoon.ai/",on:{en:"model family",th:"ชุดโมเดล"},note:{en:"Thai-language models from SCB 10X; load them in the apps above.",th:"โมเดลภาษาไทยจาก SCB 10X ใช้กับแอปข้างบนได้"}}
];

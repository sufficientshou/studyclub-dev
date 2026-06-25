const fs = require('fs');
const file = 'c:/RND-09/studyclub/src/components/pendaftaran/FormPendaftaran.tsx';
let content = fs.readFileSync(file, 'utf8');

// Title & Container
content = content.replace('max-w-3xl lg:max-w-4xl', 'max-w-2xl lg:max-w-3xl');
content = content.replace('text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6', 'text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-5');
content = content.replace('text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 lg:mb-16', 'text-xl md:text-2xl lg:text-3xl font-semibold mb-8 lg:mb-12');
content = content.replace(/gap-6 lg:gap-8/g, 'gap-5 lg:gap-6');

// Cards General
content = content.replace(/p-6 lg:p-10/g, 'p-5 lg:p-7');
content = content.replace(/w-10 h-10 lg:w-12 lg:h-12/g, 'w-9 h-9 lg:w-11 lg:h-11');
content = content.replace(/w-6 h-6 lg:w-7 lg:h-7/g, 'w-5 h-5 lg:w-6 lg:h-6');
content = content.replace(/text-xl lg:text-2xl/g, 'text-lg lg:text-xl');
content = content.replace(/text-base lg:text-lg mb-6/g, 'text-sm lg:text-base mb-5');
content = content.replace(/text-base lg:text-lg mb-8/g, 'text-sm lg:text-base mb-6');

// Inputs
content = content.replace(/px-5 py-4 lg:px-6 lg:py-5/g, 'px-4 py-3 lg:px-5 lg:py-4');

// Radios
content = content.replace(/w-3 h-3 lg:w-4 lg:h-4/g, 'w-2.5 h-2.5 lg:w-3 lg:h-3');

// Kelas Options
content = content.replace(/p-6 lg:p-8 rounded-2xl/g, 'p-4 lg:p-6 rounded-xl');
content = content.replace(/w-12 h-12 lg:w-16 lg:h-16 mb-4/g, 'w-10 h-10 lg:w-14 lg:h-14 mb-3');
content = content.replace(/text-lg lg:text-xl mb-6/g, 'text-base lg:text-lg mb-4');

// Textarea
content = content.replace(/h-32/g, 'h-24');

// Ya/Tidak Options
content = content.replace(/py-\[14\.5px\] lg:py-\[18\.5px\]/g, 'py-3 lg:py-4');

// Submit Button
content = content.replace(/px-6 py-4 lg:px-8 lg:py-5/g, 'px-5 py-3 lg:px-6 lg:py-4');
content = content.replace(/text-lg lg:text-xl/g, 'text-base lg:text-lg');
content = content.replace(/w-7 h-7 lg:w-8 lg:h-8/g, 'w-6 h-6 lg:w-7 lg:h-7');
content = content.replace(/w-3\.5 h-3\.5 lg:w-4 lg:h-4/g, 'w-3 h-3 lg:w-3.5 lg:h-3.5');

fs.writeFileSync(file, content);

'use client'

import NavBar from '@/components/nav-bar'

const Page = () => {
  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white px-8 py-8">
        {/* Navbar */}
        <div className="sticky top-4 z-50 backdrop-blur-md flex justify-center mb-20">
            <NavBar />
        </div>

        <h1 className="text-5xl font-medium mb-16 ml-75">Education</h1>

        <div className="relative border-l-4 border-gray-400 ml-75 pl-10 space-y-16">

        {/* SMA NEGERI 1 */}
        <div className="flex items-start space-x-10">
            <img
                src="/general/smansa.png"
                alt="SMA Negeri 1 Kota Magelang"
                className="w-20 h-20 object-contain"
            />
        <div>
            <h2 className="text-2xl font-bold">SMA Negeri 1 Kota Magelang</h2>
            <p className="italic text-[#D4FFA9]">Majored in Science</p>
            <p className="text-[#D4FFA9]">(2020 - 2023)</p>
          </div>
        </div>

        {/* ITB */}
        <div className="flex items-start space-x-10">
            <img
                src="/general/itb.png"
                alt="Institut Teknologi Bandung"
                className="w-20 h-20 object-contain"
            />
            <div>
                <h2 className="text-2xl font-bold">Institut Teknologi Bandung</h2>
                <p className="italic text-[#D4FFA9]">Information System & Technology</p>
                <p className="text-[#D4FFA9]">(2023 - now)</p>
            </div>
            </div>
        </div>

        <h1 className="text-5xl font-medium mt-20 mb-16 ml-75">Achievements <span className="text-[#D4FFA9] italic font-medium">& Duties</span></h1>

        <div className="relative border-l-4 border-gray-400 ml-75 pl-10 space-y-16">
            {/* TPB Cup */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/tpbcup.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Graphic Designer</h2>
                    <p className="text">TPB Cup ITB 2023</p>
                    <p className="text-[#D4FFA9]/90">(Oct 2023 - Feb 2024)</p>
                </div>
            </div>

            {/* TPB Cup */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/ami.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Graphic Designer</h2>
                    <p className="text">Aku Masuk ITB 2024</p>
                    <p className="text-[#D4FFA9]/90">(Oct 2023 - Feb 2024)</p>
                </div>
            </div>

            {/* BPA */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/bpa.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Creative Designer</h2>
                    <p className="text">Sekolah Teknik Elektro dan Informatika 2023</p>
                    <p className="text-[#D4FFA9]/90">(Jan 2024 - Jun 2024)</p>
                </div>
            </div>

            {/* GIM */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/gim.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Visual Artist</h2>
                    <p className="text">Ganesha Interactive Media 2024</p>
                    <p className="text-[#D4FFA9]/90">(Feb 2024 - present)</p>
                </div>
            </div>

            {/* AMI */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/tsa.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Staff of Creative Media</h2>
                    <p className="text">Tanoto Scholars Association ITB (TSA ITB)</p>
                    <p className="text-[#D4FFA9]/90">(Mar 2024 - present)</p>
                </div>
            </div>

            {/* AMI */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/asrama.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Graphic Designer</h2>
                    <p className="text">Asrama ITB</p>
                    <p className="text-[#D4FFA9]/90">(May 2024 - present)</p>
                </div>
            </div>

            {/* ARKAV */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/Arkavidia.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Staff of UI/UX Competititon</h2>
                    <p className="text">ARKAVIDIA Informatics Competition</p>
                    <p className="text-[#D4FFA9]/90">(Dec 2024 - May 2025)</p>
                </div>
            </div>

            {/* HMIF */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/hmif.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Head of Creative</h2>
                    <p className="text">Dies Natalies HMIF ITB</p>
                    <p className="text-[#D4FFA9]/90">(Oct 2024)</p>
                </div>
            </div>

            {/* HMIF */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/itb.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Top 10 Finalist of UI/UX Competition</h2>
                    <p className="text">Hac2fest: Ciputra University</p>
                    <p className="text-[#D4FFA9]/90">(Mar 2025)</p>
                </div>
            </div>

            {/* HMIF */}
            <div className="flex items-start space-x-10">
                <img
                    src="/general/hmif.png"
                    alt="Institut Teknologi Bandung"
                    className="w-20 h-20 object-contain"
                />
                <div>
                    <h2 className="text-2xl font-bold">Head of Creative</h2>
                    <p className="text">SPARTA HMIF ITB</p>
                    <p className="text-[#D4FFA9]/90">(May 2025 - present)</p>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Page

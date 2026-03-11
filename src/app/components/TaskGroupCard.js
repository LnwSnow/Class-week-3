import Image from "next/image"

export default function TaskGroupCard({ title, task, percent, color, icon: Icon, iconcolor, img }) {

    return (
        <>
            <div className="flex flex-row justify-between items-center gap-3 p-4 
                bg-white rounded-xl shadow-sm">
                <div className="flex flex-row items-center gap-3">
                    <div className={`${color} p-2 rounded-xl`}>
                        <Icon className={`w-6 ${iconcolor}`} />
                    </div>
                    <div className="flex flex-col flex-starts">
                        <h3>{title}</h3>
                        <p className="text-gray-500 text-sm">{task}</p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <p className="text-md font-semibold
                    absolute ml-2.5">{percent}</p>
                    <Image src={`/${img}`} width={50} height={50} alt="percent" />
                </div>
            </div>
        </>
    )
}
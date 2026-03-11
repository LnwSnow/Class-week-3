import Image from "next/image"
import Link from "next/link"
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { BellIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/solid";
import TaskGroupCard from "../components/TaskGroupCard";

export default function Dashboard() {
    return (
        <>
            <Image src="/dashboard.png"
                width={300}
                height={400}
                alt="dashboard"
                className="w-full absolute z-[-1]"
            />

            <div className="flex flex-col p-4 gap-6">

                <div className="flex flex-row justify-between gap-3 p-3">
                    <div className="flex flex-row items-center gap-3">
                        <Image src="/Ellipse 15.png" width={50} height={50} alt="profile" />
                        <div className="flex flex-col flex-starts">
                            <p className="text-gray-500 text-sm">
                                Hello!</p>
                            <p className="text-xl font-bold">
                                Livia Vaccaro</p>
                        </div>
                    </div>
                    <BellIcon className="w-6" />
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-3 p-3">
                        <h2 className="text-2xl font-bold">Task Groups</h2>
                        <p className="text-violet-600 text-sm font-bold bg-violet-100 px-2.5 py-1 rounded-2xl">4</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <TaskGroupCard
                            title="Office Project"
                            task="23 Tasks"
                            percent="70%"
                            color="bg-pink-100"
                            icon={BriefcaseIcon}
                            iconcolor="fill-pink-400"
                            img="pink.png" />
                        <TaskGroupCard
                            title="Personal Project"
                            task="30 Tasks"
                            percent="52%"
                            color="bg-violet-100"
                            icon={UserCircleIcon}
                            iconcolor="fill-violet-500"
                            img="purple.png" />
                        <TaskGroupCard
                            title="Daily Study"
                            task="30 Tasks"
                            percent="87%"
                            color="bg-orange-100"
                            icon={BookOpenIcon}
                            iconcolor="fill-orange-400"
                            img="orange.png" />
                        <TaskGroupCard
                            title="Daily Study"
                            task="3 Tasks"
                            percent="87%"
                            color="bg-amber-100"
                            icon={BookOpenIcon}
                            iconcolor="fill-amber-400"
                            img="yellow.png" />
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-24 p-3
                bg-violet-100 rounded-2xl ">
                <Link href="/Home">
                    <button>
                        <HomeIcon className="w-6 fill-violet-500" />
                    </button>
                </Link>
                <Link href="/dashboard">
                    <button>
                        <CalendarDaysIcon className="w-6 fill-violet-500" />
                    </button>
                </Link>
                <Link href="/task">
                    <button>
                        <DocumentIcon className="w-6 fill-violet-500" />
                    </button>
                </Link>

            </div >
        </>
    )
}
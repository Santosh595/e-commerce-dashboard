import bugIcon from '../assets/right_sidebar/BugBeetle.svg';
import userIcon from '../assets/right_sidebar/User.svg';
import broadcastIcon from '../assets/right_sidebar/Broadcast.svg';
import avatar1 from '../assets/right_sidebar/avatar1.png';
import avatar2 from '../assets/right_sidebar/avatar2.png';
import avatar3 from '../assets/right_sidebar/avatar3.png';
import avatar4 from '../assets/right_sidebar/avatar4.png';
import avatar5 from '../assets/right_sidebar/avatar5.png';
import avatar6 from '../assets/right_sidebar/avatar6.png';
import avatar7 from '../assets/order_table/avatar1.png';
import avatar8 from '../assets/order_table/avatar2.png';

// --- DATA ---
const notificationsData = [
    { icon: bugIcon, text: "You have a bug that needs...", time: "Just now" },
    { icon: userIcon, text: "New user registered", time: "59 minutes ago" },
    { icon: bugIcon, text: "You have a bug that needs...", time: "12 hours ago" },
    { icon: broadcastIcon, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
];
const activitiesData = [
    { avatar: avatar1, text: "You have a bug that needs...", time: "Just now" },
    { avatar: avatar2, text: "Released a new version", time: "59 minutes ago" },
    { avatar: avatar3, text: "Submitted a bug", time: "12 hours ago" },
    { avatar: avatar4, text: "Modified A data in Page X", time: "Today, 11:59 AM" },
    { avatar: avatar5, text: "Deleted a page in Project X", time: "Feb 2, 2023" },
];
const contactsData = [
    { name: "Natali Craig", avatar: avatar6 },
    { name: "Drew Cano", avatar: avatar7 },
    { name: "Orlando Diggs", avatar: avatar8 },
    { name: "Andi Lane", avatar: avatar4 },
    { name: "Kate Morrison", avatar: avatar2 },
    { name: "Koray Okumus", avatar: avatar1 },
];

// --- REUSABLE COMPONENTS ---
const Section = ({ title, children }) => (
    <div>
        <h3 className="text-base font-semibold text-text-light dark:text-text-dark mb-4">{title}</h3>
        <div className="flex flex-col gap-3">{children}</div>
    </div>
);

const NotificationItem = ({ icon, text, time }) => (
    <div className="flex items-start gap-3">
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue dark:bg-primary-dark rounded-full">
            <img src={icon} alt="" className="w-4 h-4 dark:invert" />
        </div>
        <div>
            <p className="text-sm text-text-light dark:text-text-dark leading-snug truncate">{text}</p>
            <p className="text-xs text-text-light/40 dark:text-text-dark/40 mt-0.5">{time}</p>
        </div>
    </div>
);

const ActivityItem = ({ avatar, text, time, isLast }) => (
    <div className="flex items-start gap-4 relative">
        {!isLast && (
            <div className="absolute left-[15px] top-5 h-full w-px bg-borderc-light dark:bg-borderc-dark"></div>
        )}
        <div className="relative z-10">
            <img
                src={avatar}
                alt=""
                className="w-8 h-8 rounded-full object-cover border-2 border-background-light dark:border-background-dark"
            />
        </div>
        <div>
            <p className="text-sm text-text-light dark:text-text-dark leading-snug">{text}</p>
            <p className="text-xs text-text-light/40 dark:text-text-dark/40 mt-0.5">{time}</p>
        </div>
    </div>
);

const ContactItem = ({ avatar, name }) => (
    <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-8 h-8 rounded-full object-cover" />
        <p className="text-sm  text-text-light dark:text-text-dark">{name}</p>
    </div>
);

// --- RIGHT SIDEBAR COMPONENT ---
export default function RightSidebar() {
    return (
        <div className="h-full w-full p-5 px-8 bg-background-light dark:bg-background-dark flex flex-col gap-6 overflow-y-auto">
            <Section title="Notifications">
                {notificationsData.map((item, index) => (
                    <NotificationItem key={index} {...item} />
                ))}
            </Section>

            <Section title="Activities">
                {activitiesData.map((item, index) => (
                    <ActivityItem key={index} {...item} isLast={index === activitiesData.length - 1} />
                ))}
            </Section>

            <Section title="Contacts">
                {contactsData.map((item, index) => (
                    <ContactItem key={index} {...item} />
                ))}
            </Section>
        </div>
    );
}

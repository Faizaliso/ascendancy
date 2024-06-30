import Link from "next/link";

export const CardEvent = ({ item }) => {
  return (
    <Link href={`/${item.id}`}>
      <div className="border border-slate-500 rounded-xl w-[360px] ">
        <div className="w-full h-[200px] bg-slate-200"></div>
        <div className="flex flex-col justify-center items-start gap-3 p-[10px] ">
          <h3>{item.title}</h3>
          <h4>{item.price === 0 ? "Free" : `Rp ${item.price}`}</h4>
          <h4 className="font-normal">{item.user.username}</h4>
          <button className="bg-slate-900">Get Access</button>
        </div>
      </div>
    </Link>
  );
};

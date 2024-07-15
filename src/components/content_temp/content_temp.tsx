"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import DataverseContent from "../../../components/DataverseContent";
import { SOD, getSaleOrder_paging } from "../../../lib/dataverse";

function content_temp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [saleOrders, setSaleOrders] = useState<SOD[]>([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [page, setPage] = useState(1);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hasNextPage, setHasNextPage] = useState(true);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetchSaleOrders();
  }, []);

  const fetchSaleOrders = async () => {
    if (isLoading || !hasNextPage) return;

    setIsLoading(true);
    try {
      const result = await getSaleOrder_paging(page, 10);
      setSaleOrders((prevOrders) => [...prevOrders, ...result.saleOrders]);
      setHasNextPage(result.hasNextPage);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching sale orders:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="box-border flex overflow-hidden overflow-x-hidden overflow-y-hidden relative flex-col shrink-0 mt-px bg-white">
      <img
        loading="lazy"
        alt=""
        src="https://cdn.builder.io/api/v1/image/assets%2F72645f1c581446d9b326ff62153df84b%2F4cabc051b75443448a1a92bff409187c"
        className="box-border object-contain object-left overflow-hidden absolute top-px shrink-0 mr-0 aspect-square h-[77px] left-[33px] max-w-[148px] min-h-[20px] min-w-[20px] w-[67px]"
      />
      <div className="box-border flex relative flex-col shrink-0">
        <div className="flex flex-row">
          <div className="pb-3 pl-12 mt-3 mb-auto ml-14 text-4xl text-cyan-600 font-[bold]">
            WECARE
          </div>
          <div className="box-border flex absolute top-0 flex-col grow shrink-0 justify-center items-start self-center py-2 pr-16 pl-3.5 rounded-3xl bg-[white] h-[51px] left-[414px] max-w-[662px] shadow-[0_6px_10px_rgba(30,144,197,0.5)] w-[820px]">
            <input
              type="text"
              placeholder="Tìm kiếm và nhấn enter"
              className="absolute top-2 left-3 grow px-4 py-2.5 ml-2.5 rounded-3xl rounded-tl-3xl border-[none] w-[333px]"
            />
          </div>
          <button className="absolute top-0 py-2.5 pr-5 pl-9 bg-sky-500 rounded-none border-white cursor-pointer border-[none] h-[31px] left-[960px] text-[white] w-[78px]">
            Search
          </button>
        </div>
      </div>
      <div className="flex gap-0 self-stretch my-auto max-md:justify-center">
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Trang Chủ</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Sản phẩm</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Về chúng tôi</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Tin tức</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Đơn hàng·</h4>
        </div>
        <div className="pr-4 pl-5 my-auto text-cyan-600 no-underline">
          <h4>Kho vận</h4>
        </div>
      </div>
      <div className="box-border inline-block relative flex-col shrink-0">
        <ul className="hidden absolute bg-stone-50 min-w-[160px] shadow-[rgba(0,0,0,0.2)_0px_8px_16px_0px] z-[1]">
          <li className="px-4 py-3 no-underline text-zinc-800">Option 1</li>
          <li className="px-4 py-3 no-underline text-zinc-800">Option 2</li>
          <li className="px-4 py-3 no-underline text-zinc-800">Option 3</li>
        </ul>
      </div>
      <div className="flex flex-col shadow-sm">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[17%] max-md:ml-0 max-md:w-full">
            <div
              className="box-border flex relative flex-col shrink-0 py-5 pl-5 min-h-[auto]"
              style={{ maxWidth: 1200 }}
            >
              <section className="box-border flex relative flex-col grow shrink-0 self-stretch py-5 pl-5 mx-auto w-full max-w-[1200px] min-h-[auto]">
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
                <button className="box-border relative shrink-0 px-6 py-4 mt-5 text-center text-blue-500 rounded appearance-none cursor-pointer bg-neutral-200">
                  Click me!
                </button>
              </section>
            </div>
            <div />
          </div>
          <div className="flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full">
            <div className="box-border relative shrink-0 mt-5 h-auto">
              <h2>Sale Orders</h2>
              {saleOrders.length > 0 ? (
                <ul>
                  {/* {saleOrders.map((order, index) => (
              <li key={index}>{order.name} - {order.amount}</li>
            ))} */}
                </ul>
              ) : (
                <p>No sale orders found.</p>
              )}
              {hasNextPage && (
                <button onClick={fetchSaleOrders} disabled={isLoading}>
                  {isLoading ? "Loading..." : "Load More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default content_temp;

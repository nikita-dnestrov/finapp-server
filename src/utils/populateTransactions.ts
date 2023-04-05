//   async populatedb() {
//     let startDate = dayjs(new Date(1630458093 * 1000));
//     let nextDate = dayjs(new Date(1630458093 * 1000)).add(1, "month");

//     console.log(
//       `Start from: ${dayjs(startDate).format("dddd, MMMM D, YYYY")} \nEnd with: ${dayjs(nextDate).format(
//         "dddd, MMMM D, YYYY"
//       )} `
//     );

//     const interval = setIntervalAsync(async () => {
//       console.log(
//         `Start from: ${dayjs(startDate).format("dddd, MMMM D, YYYY")} \nEnd with: ${dayjs(nextDate).format(
//           "dddd, MMMM D, YYYY"
//         )} `
//       );

//       const { data }: AxiosResponse = await axios.get(
//         `https://api.monobank.ua/personal/statement/G1m1U4Cxa1AvIE3iYlrFrw/${dayjs(startDate).unix()}/${dayjs(
//           nextDate
//         ).unix()}`,
//         {
//           headers: { "X-Token": process.env.MONOBANK_API_KEY },
//         }
//       );

//       const mapped = data.map((el: any) => ({
//         id: el.id,
//         transactionTime: el.time,
//         mcc: el.mcc,
//         transactionAmount: el.amount,
//       })) as Transaction[];

//       await Promise.all(
//         mapped.map(async (el) => {
//           const check = await transactionsRef.findUnique({ where: { id: el.id } });
//           if (check) return Promise.resolve("");
//           else {
//             console.log("creating with id: ", el.id);
//             return await transactionsRef.create({ data: el });
//           }
//         })
//       );

//       startDate = dayjs(nextDate);
//       nextDate = dayjs(nextDate).add(1, "month");
//     }, 61000);
//     if (dayjs(startDate).isAfter(dayjs(1680557253))) {
//       clearInterval(interval);
//       console.log("cleared");
//     }
//     return "";
//   }

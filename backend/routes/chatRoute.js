// import express from "express";
// import fetch from "node-fetch";

// const router = express.Router();

// router.post("/", async (req, res) => {
//   const { message } = req.body;

//   try {
//     const hfResponse = await fetch(
//   "https://api-inference.huggingface.co/models/facebook/blenderbot-3B",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.HF_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ inputs: message }),
//       }
//     );

//     if (!hfResponse.ok) {
//       const errorText = await hfResponse.text();
//       return res
//         .status(hfResponse.status)
//         .json({ error: `HF error: ${errorText}` });
//     }

//     const data = await hfResponse.json();
//     res.json(data);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ error: error.message || "Failed to connect to AI service" });
//   }
// });

// export default router;

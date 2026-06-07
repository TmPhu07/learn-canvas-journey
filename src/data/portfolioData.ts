// =============================================================
// Toàn bộ nội dung của website được quản lý tại file này.
// Chỉnh sửa dữ liệu ở đây, giao diện sẽ tự cập nhật.
// =============================================================

export interface Profile {
  name: string;
  studentId: string;
  major: string;
  courseTitle: string;
  intro: string;
  tags: string[];
}

export interface Assignment {
  id: number;
  title: string;
  shortDescription: string;
  status: "completed" | "in-progress";
  icon: string; // tên icon trong lucide-react
  goal: string;
  process: string;
  result: string;
  lesson: string;
  pdfLink: string;
  driveLink: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  icon: string;
}

export interface Summary {
  intro: string;
  timeline: TimelineItem[];
  highlightLabel: string;
  highlightQuote: string;
}

export const profile: Profile = {
  name: "Trần Minh Phú",
  studentId: "25021941",
  major: "Khoa học máy tính",
  courseTitle: "Portfolio Nhập môn Công nghệ số & Trí tuệ nhân tạo",
  intro:
    "Portfolio này được thiết kế nhằm hệ thống hóa kiến thức môn Nhập môn Công nghệ số, lưu trữ các sản phẩm số cá nhân và ghi lại hành trình học tập, phát triển kỹ năng của tôi trong suốt học kỳ.",
  tags: ["Công nghệ", "AI", "Pokémon", "Digital Tools"],
};

export const assignments: Assignment[] = [
  {
    id: 1,
    title: "Quản lý tệp và thư mục",
    shortDescription:
      "Xây dựng hệ thống tổ chức dữ liệu cá nhân khoa học, dễ tìm kiếm và sao lưu an toàn.",
    status: "completed",
    icon: "Folder",
    goal: "Hiểu nguyên tắc tổ chức tệp tin và xây dựng cấu trúc thư mục logic cho việc học tập.",
    process:
      "Thiết kế cây thư mục theo môn học và dự án, áp dụng quy tắc đặt tên nhất quán, đồng bộ dữ liệu lên cloud.",
    result:
      "Một hệ thống lưu trữ gọn gàng, truy xuất nhanh và có bản sao lưu tự động trên đám mây.",
    lesson:
      "Tổ chức dữ liệu tốt ngay từ đầu giúp tiết kiệm rất nhiều thời gian về sau và giảm rủi ro mất mát.",
    pdfLink: "/files/bai-1.pdf", // <-- Up file PDF vào public/files/ với tên này, hoặc dán link tại đây
    driveLink: "#",
  },
  {
    id: 2,
    title: "Tìm kiếm và đánh giá thông tin",
    shortDescription:
      "Rèn luyện kỹ năng tìm kiếm nâng cao và đánh giá độ tin cậy của nguồn thông tin số.",
    status: "completed",
    icon: "Search",
    goal: "Tìm kiếm hiệu quả và phân biệt thông tin đáng tin cậy với thông tin sai lệch.",
    process:
      "Sử dụng toán tử tìm kiếm nâng cao, đối chiếu nhiều nguồn, kiểm tra tác giả và thời điểm xuất bản.",
    result:
      "Bộ tiêu chí đánh giá nguồn tin cá nhân và một báo cáo phân tích thông tin theo chủ đề công nghệ.",
    lesson:
      "Không phải mọi thông tin trên Internet đều đúng — tư duy phản biện là kỹ năng sống còn.",
    pdfLink: "/files/bai-2.pdf", // <-- Up file PDF vào public/files/ với tên này, hoặc dán link tại đây
    driveLink: "#",
  },
  {
    id: 3,
    title: "Viết Prompt hiệu quả",
    shortDescription:
      "Thực hành kỹ thuật prompt engineering để khai thác tối đa sức mạnh của AI tạo sinh.",
    status: "completed",
    icon: "Wand2",
    goal: "Nắm vững cách diễn đạt yêu cầu để AI tạo ra kết quả chính xác và hữu ích.",
    process:
      "Thử nghiệm các mẫu prompt khác nhau, áp dụng kỹ thuật role, context, ví dụ mẫu và tinh chỉnh lặp lại.",
    result:
      "Bộ sưu tập prompt mẫu cho học tập, viết lách và lập trình kèm phân tích kết quả.",
    lesson:
      "Chất lượng câu trả lời của AI phụ thuộc rất lớn vào chất lượng câu hỏi của con người.",
    pdfLink: "/files/bai-3.pdf", // <-- Up file PDF vào public/files/ với tên này, hoặc dán link tại đây
    driveLink: "#",
  },
  {
    id: 4,
    title: "Hợp tác trực tuyến",
    shortDescription:
      "Làm việc nhóm hiệu quả với các công cụ cộng tác và quản lý dự án trên nền tảng số.",
    status: "completed",
    icon: "Users",
    goal: "Phối hợp nhóm hiệu quả qua các nền tảng cộng tác trực tuyến.",
    process:
      "Sử dụng tài liệu chia sẻ, bảng công việc và họp trực tuyến để phân chia và theo dõi tiến độ.",
    result:
      "Một sản phẩm nhóm hoàn chỉnh được thực hiện hoàn toàn qua môi trường làm việc trực tuyến.",
    lesson:
      "Giao tiếp rõ ràng và phân chia trách nhiệm minh bạch là chìa khóa của làm việc nhóm từ xa.",
    pdfLink: "/files/bai-4.pdf", // <-- Up file PDF vào public/files/ với tên này, hoặc dán link tại đây
    driveLink: "#",
  },
  {
    id: 5,
    title: "Sáng tạo nội dung với AI",
    shortDescription:
      "Kết hợp công cụ AI để thiết kế, viết và tạo nội dung số sáng tạo, có dấu ấn cá nhân.",
    status: "completed",
    icon: "Sparkles",
    goal: "Ứng dụng AI vào quá trình sáng tạo nội dung văn bản và hình ảnh.",
    process:
      "Lên ý tưởng, dùng AI hỗ trợ phác thảo và tinh chỉnh, kết hợp sáng tạo cá nhân để hoàn thiện sản phẩm.",
    result:
      "Một bộ sản phẩm số đa phương tiện được tạo với sự hỗ trợ của AI nhưng mang dấu ấn riêng.",
    lesson:
      "AI là công cụ khuếch đại sự sáng tạo, không thay thế ý tưởng và gu thẩm mỹ của con người.",
    pdfLink: "/files/bai-5.pdf", // <-- Up file PDF vào public/files/ với tên này, hoặc dán link tại đây
    driveLink: "#",
  },
  {
    id: 6,
    title: "AI có trách nhiệm",
    shortDescription:
      "Tìm hiểu đạo đức, quyền riêng tư và việc sử dụng AI một cách minh bạch, có trách nhiệm.",
    status: "completed",
    icon: "ShieldCheck",
    goal: "Hiểu các vấn đề đạo đức và sử dụng AI một cách có trách nhiệm, minh bạch.",
    process:
      "Nghiên cứu các tình huống về thiên kiến, quyền riêng tư, bản quyền và xây dựng nguyên tắc sử dụng AI.",
    result:
      "Bộ nguyên tắc sử dụng AI có trách nhiệm áp dụng cho học tập và công việc cá nhân.",
    lesson:
      "Sử dụng AI có trách nhiệm nghĩa là luôn minh bạch, kiểm chứng và tôn trọng quyền của người khác.",
    pdfLink: "/files/bai-6.pdf", // <-- Up file PDF vào public/files/ với tên này, hoặc dán link tại đây
    driveLink: "#",
  },
];

export const summary: Summary = {
  intro:
    "Hành trình một học kỳ đã giúp tôi chuyển từ việc sử dụng công nghệ một cách thụ động sang khai thác công nghệ và AI một cách chủ động, sáng tạo và có trách nhiệm.",
  timeline: [
    {
      title: "Những kiến thức đã học",
      description:
        "Nền tảng công nghệ số, cách thức hoạt động của AI tạo sinh, kỹ năng tìm kiếm, đánh giá thông tin và đạo đức số.",
      icon: "BookOpen",
    },
    {
      title: "Những kỹ năng đạt được",
      description:
        "Tổ chức dữ liệu khoa học, viết prompt hiệu quả, cộng tác trực tuyến và sáng tạo nội dung với sự hỗ trợ của AI.",
      icon: "Trophy",
    },
    {
      title: "Khó khăn gặp phải",
      description:
        "Lượng công cụ mới rất lớn, đôi khi quá phụ thuộc vào AI và khó đánh giá độ chính xác của kết quả.",
      icon: "Target",
    },
    {
      title: "Cách khắc phục",
      description:
        "Học theo dự án thực tế, luôn kiểm chứng thông tin từ nhiều nguồn và rèn tư duy phản biện trước mọi kết quả AI.",
      icon: "Wand2",
    },
    {
      title: "Định hướng tương lai",
      description:
        "Tiếp tục đào sâu về Khoa học máy tính và AI, xây dựng các sản phẩm số hữu ích và phát triển kỹ năng tự học suốt đời.",
      icon: "Compass",
    },
  ],
  highlightLabel: "Điều giá trị nhất tôi học được",
  highlightQuote:
    "AI giúp tăng tốc quá trình học tập, nhưng tư duy phản biện và khả năng tự đánh giá mới là yếu tố quyết định chất lượng kết quả.",
};

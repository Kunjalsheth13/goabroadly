import prisma from "@/lib/prisma";
import { sanitizePlainText, sanitizeInput } from "@/lib/sanitize";
import type { ContactFormData, ConsultationFormData } from "@/lib/validations";
import {
  sendContactConfirmation,
  sendAdminNotification,
} from "@/services/emailService";

export async function createContactInquiry(data: ContactFormData) {
  const inquiry = await prisma.contactInquiry.create({
    data: {
      fullName: sanitizePlainText(data.fullName),
      email: data.email.toLowerCase(),
      phone: sanitizePlainText(data.phone),
      interestedCountry: sanitizePlainText(data.interestedCountry),
      serviceType: sanitizePlainText(data.serviceType),
      message: sanitizeInput(data.message),
    },
  });

  await Promise.all([
    sendContactConfirmation(inquiry.email, inquiry.fullName),
    sendAdminNotification("contact", {
      Name: inquiry.fullName,
      Email: inquiry.email,
      Phone: inquiry.phone,
      Country: inquiry.interestedCountry,
      Service: inquiry.serviceType,
    }),
  ]);

  return inquiry;
}

export async function createConsultationBooking(data: ConsultationFormData) {
  const booking = await prisma.consultationBooking.create({
    data: {
      fullName: sanitizePlainText(data.fullName),
      email: data.email.toLowerCase(),
      phone: sanitizePlainText(data.phone),
      preferredDate: new Date(data.preferredDate),
      preferredTime: sanitizePlainText(data.preferredTime),
      notes: data.notes ? sanitizeInput(data.notes) : null,
    },
  });

  await sendAdminNotification("consultation", {
    Name: booking.fullName,
    Email: booking.email,
    Phone: booking.phone,
    Date: booking.preferredDate.toDateString(),
    Time: booking.preferredTime,
  });

  return booking;
}

export async function getDashboardStats() {
  const [totalInquiries, totalBookings, totalBlogs, recentInquiries] =
    await Promise.all([
      prisma.contactInquiry.count(),
      prisma.consultationBooking.count(),
      prisma.blogPost.count(),
      prisma.contactInquiry.count({
        where: {
          createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
        },
      }),
    ]);

  return { totalInquiries, totalBookings, totalBlogs, recentInquiries };
}

import {
  Box,
  Center,
  Container,
  Divider,
  Image,
  Pagination,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";

// --- Image Imports (Keep as they are) ---
import c1 from "../assets/images/c1.jpg";
import c2 from "../assets/images/c2.png";
// ... (include all other image imports like before)
import g1 from "../assets/images/g1.jpg";
import g2 from "../assets/images/g2.jpg";
import g3 from "../assets/images/g3.jpg";
import g4 from "../assets/images/g4.jpg";
import g6 from "../assets/images/g6.jpg";
import g7 from "../assets/images/g7.jpg";
import g8 from "../assets/images/g8.jpg";
import gallery0 from "../assets/images/gallery-1.jpg";
import gallery83 from "../assets/images/gallery-10.jpg";
import gallery85 from "../assets/images/gallery-11.jpg";
import gallery86 from "../assets/images/gallery-12.jpg";
import gallery1 from "../assets/images/gallery-2.jpg";
import gallery2 from "../assets/images/gallery-3.jpg";
import gallery3 from "../assets/images/gallery-4.jpg";
import gallery4 from "../assets/images/gallery-5.jpg";
import gallery5 from "../assets/images/gallery-6.jpg";
import gallery6 from "../assets/images/gallery-7.jpg";
import gallery82 from "../assets/images/gallery-9.jpg";
// import gallery87 from "../assets/images/gallery-13.jpg";
import gallery9 from "../assets/images/gallery-14.jpg";
import gallery88 from "../assets/images/gallery-15.jpg";
import gallery84 from "../assets/images/gallery-16.jpg";
import gallery10 from "../assets/images/gallery-17.jpg";
import gallery11 from "../assets/images/gallery-18.jpg";
import gallery90 from "../assets/images/gallery-19.jpg";
import gallery12 from "../assets/images/gallery-20.jpg";
import gallery14 from "../assets/images/gallery-21.jpg";
import gallery15 from "../assets/images/gallery-22.jpg";
import gallery16 from "../assets/images/gallery-23.jpg";
import gallery17 from "../assets/images/gallery-24.jpg";
import gallery77 from "../assets/images/gallery-25.jpg";
import gallery18 from "../assets/images/gallery-26.jpg";
import gallery78 from "../assets/images/gallery-27.jpg";
import gallery79 from "../assets/images/gallery-28.jpg";
import gallery19 from "../assets/images/gallery-29.jpg";
import gallery76 from "../assets/images/gallery-30.jpg";
// import gallery74 from "../assets/images/gallery-31.jpg";
import gallery21 from "../assets/images/gallery-32.jpg";
// import gallery22 from "../assets/images/gallery-33.jpg";
import gallery23 from "../assets/images/gallery-34.jpg";
import gallery24 from "../assets/images/gallery-35.jpg";
import gallery25 from "../assets/images/gallery-39.jpg";
import gallery26 from "../assets/images/gallery-40.jpg";

// --- Partner Imports ---
import partner1 from "../assets/images/partner-1.png";
import partner2 from "../assets/images/partner-2.png";
import partner3 from "../assets/images/partner-3.jpg";
import partner4 from "../assets/images/partner-4(1).png";

// --- Image Data Arrays ---
const GALLERY_IMAGES = [
  c1,
  g4,
  g6,
  g3,
  g1,
  g2,
  g7,
  c2,
  g8,
  gallery0,
  gallery23,
  gallery24,
  gallery25,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery10,
  gallery76,
  gallery77,
  // gallery74,
  gallery78,
  gallery79,
  gallery90,
  gallery11,
  gallery82,
  gallery83,
  gallery84,
  gallery85,
  gallery86,
  // gallery87,
  gallery88,
  gallery12,
  gallery16,
  gallery18,
  gallery17,
  gallery14,
  gallery19,
  gallery26,
  // gallery22,
  gallery6,
  gallery9,
  gallery15,
  gallery21,
];

const PARTNER_LOGOS = [partner1, partner2, partner3, partner4];

// --- Gallery Component ---
export function Gallery() {
  const theme = useMantineTheme();

  // Pagination state
  const [activePage, setActivePage] = useState(1);

  // Calculate items per page based on screen size
  const itemsPerPage = 3;
  const totalPages = Math.ceil(GALLERY_IMAGES.length / itemsPerPage);

  // Calculate which images to show on current page
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImages = GALLERY_IMAGES.slice(startIndex, endIndex);

  return (
    <Box my="xl">
      <Container size="xl" mb="xl">
        <Stack align="center">
          <Title
            order={1}
            ta="center"
            style={{
              textTransform: "uppercase",
              fontSize: "2.25rem",
              fontWeight: 700,
              color: theme.colors.gray[7],
            }}
          >
            GALLERY
          </Title>
          <Divider
            size="md"
            color={theme.colors.cyan[6]}
            style={{ width: "4rem" }}
          />
          <Text c="dimmed" ta="center" fz="lg">
            A Glimpse into Our Center and Activities
          </Text>
        </Stack>
      </Container>

      {/* Gallery Grid */}
      <Container size="xl">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing="md"
          verticalSpacing="md"
        >
          {currentImages.map((image, index) => (
            <Box
              key={startIndex + index}
              style={{
                aspectRatio: "16/9",
                borderRadius: theme.radius.sm,
                overflow: "hidden",
                boxShadow: theme.shadows.sm,
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: theme.shadows.md,
                },
              }}
            >
              <Image
                src={image}
                alt={`Gallery image ${startIndex + index + 1}`}
                height="100%"
                width="100%"
                fit="cover"
              />
            </Box>
          ))}
        </SimpleGrid>

        {/* Pagination Controls */}
        <Center mt="xl">
          <Pagination
            total={totalPages}
            value={activePage}
            onChange={setActivePage}
            size={"md"}
            radius="md"
            color={theme.primaryColor}
            withEdges
          />
        </Center>
      </Container>
    </Box>
  );
}

// --- Partners Component ---
export function Partners() {
  const theme = useMantineTheme();

  return (
    <Container size="lg" my="xl">
      <Stack align="center" mb="xl">
        <Title
          order={2}
          ta="center"
          style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            color: theme.colors.gray[6],
          }}
        >
          Our Valued Partners
        </Title>
        <Divider
          size="sm"
          color={theme.colors.gray[4]}
          style={{ width: "3.5rem" }}
        />
      </Stack>

      <SimpleGrid
        cols={{ base: 2, xs: 2, sm: 4 }}
        spacing={{ base: "md", sm: "xl" }}
        verticalSpacing={{ base: "md", sm: "xl" }}
      >
        {PARTNER_LOGOS.map((logo, index) => (
          <Box
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing.md,
              backgroundColor: theme.white,
              borderRadius: theme.radius.sm,
              boxShadow: theme.shadows.xs,
            }}
          >
            <Image
              src={logo}
              alt={`Partner logo ${index + 1}`}
              height={70}
              fit="contain"
            />
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
}

import { Box, Image, Flex, Center, useColorMode, Button, StyleConfig, extendTheme, HTMLChakraProps, ThemingProps, forwardRef, useStyleConfig, chakra } from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ResponsiveColumnMobileExample from "./ResponsiveColumnMobileExample"
import { StaticImage } from "gatsby-plugin-image"

const components: Record<string, StyleConfig> = {
    CustomBadge: {
        baseStyle: ({ colorMode }) => ({
            bg: colorMode === "dark" ? "green.300" : "green.500",
            color: colorMode === "dark" ? "gray.800" : "white",
            textTransform: "uppercase",
            fontWeight: "semibold",
            letterSpacing: "0.02em",
            padding: "4px",
            borderRadius: "2px",
            fontSize: "12px"
        }),
        variants: {
            custom: ({ colorMode }) => ({
                bg: colorMode === "dark" ? "blue.200" : "blue.500",
                padding: "8px"
            })
        }
    }
};

// 2. Call 'extendTheme' and pass your custom values
export const customTheme = extendTheme({ components });

export interface CustomBadgeProps
    extends HTMLChakraProps<"span">,
    ThemingProps { }

// 3. Use it in your components
const GatsbyChakraImage = forwardRef<CustomBadgeProps, "span">((props, ref) => {
    const { bg, variant, ...rest } = props;
    const styles = useStyleConfig("CustomBadge", { bg, variant });
    console.log(variant)
    var filter = 'invert(100)'
    if (variant == "dark") {
        filter = 'invert(100)'
    }
    else {
        filter = 'inherit'
    }
    return <chakra.span ref={ref}><StaticImage style={{ 'filter': `${filter}` }} src="../images/logo.svg" alt="Logo" width={50} /></chakra.span>;
});

export default GatsbyChakraImage